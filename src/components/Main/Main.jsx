import { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header'
import ValuteHistory from '../ValuteHistory/ValuteHistory';

import css from './main.module.css'

const Main = (props) => {
    const valuteList = props.valuteList
    const entries = Object.entries(valuteList)

    const [currentValute, setCurrentValute] = useState({
        code: '',
        name: '',
        value: ''
    })

    const valutesElements = entries.map(valute => {
        const id = valute[1].ID
        const code = valute[0]
        const name = valute[1].Name
        const previousValue = valute[1].Previous
        const value = valute[1].Value
        const changes = (value / previousValue * 100 - 100).toFixed(3)

        return (
            <div key={id} className={css.rateBlock}>
                <NavLink to={`/valute/` + code} className={`${css.valuteCode} ${css.valuteValue}`} onClick={() => { setCurrentValute({ code: code, name: name, value: value }) }}>
                    {code}
                    <span className={css.tooltipText}>{name}</span>
                </NavLink>
                <div className={`${css.valutePrice} ${css.valuteValue}`}>
                    {value}
                </div>
                <div className={`${css.valuteChanges} ${css.valuteValue}`}>
                    {changes[0] === '-' ? changes : '+' + changes}
                </div>
            </div>
        )
    })

    return (
        <div>
            <Routes>
                <Route path='*' element={
                    <div>
                        <Header date={props.date} />
                        {valutesElements}
                    </div>
                }
                />
                <Route path={`/valute/` + currentValute.code} element={
                    <ValuteHistory
                        code={currentValute.code}
                        name={currentValute.name}
                        date={props.date}
                        value={currentValute.value}
                        prevURL={props.prevURL}
                    />
                }
                />
            </Routes>
        </div>
    )
}

export default Main