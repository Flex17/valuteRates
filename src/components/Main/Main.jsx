import Header from '../Header/Header'
import css from './main.module.css'

const Main = (props) => {
    const entries = Object.entries(props.valuteList)

    const valutesElements = entries.map(valute => {
        const id = valute[1].ID
        const code = valute[0]
        const name = valute[1].Name
        const previousValue = valute[1].Previous
        const value = valute[1].Value
        const changes = (value / previousValue * 100 - 100).toFixed(3)

        return (
            <div key={id} className={css.rateBlock}>
                <div className={`${css.valuteCode} ${css.valuteValue}`}>
                    {code}
                    <span className={css.tooltipText}>{name}</span>
                </div>
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
            <Header date={props.date} />
            {valutesElements}
        </div>
    )
}

export default Main