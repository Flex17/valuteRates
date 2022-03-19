import { useState, useEffect } from "react"
import axios from "axios"

import css from './main.module.css'
import Spinner from "../Spinner/Spinner"

const Main = () => {
    const [rateList, setRateList] = useState({
        isLoading: true,
        valuteList: []
    })

    useEffect(() => {
        const url = 'https://www.cbr-xml-daily.ru/daily_json.js'

        axios.get(url)
            .then(response => {
                const valuteList = response.data.Valute

                setRateList({
                    valuteList: valuteList,
                    isLoading: false
                })
            })
            .catch(error => {
                console.log(error)
            })
    }, [setRateList])

    const entries = Object.entries(rateList.valuteList)

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
                    {changes}
                </div>
            </div>
        )
    })

    return (
        <div>
            {rateList.isLoading ?
                <Spinner /> : valutesElements
            }
        </div>
    )
}

export default Main