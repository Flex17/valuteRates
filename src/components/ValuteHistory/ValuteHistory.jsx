import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import css from './valuteHistory.module.css'

const ValuteHistory = (props) => {
    const prevURL = props.prevURL

    const [data, setData] = useState([])

    async function getHistory() {
        await axios
            .get(prevURL)
            .then(response => {
                setData(prevArray => [...prevArray, response.data])
                return axios.get(response.data.PreviousURL)
            })
            .then(response => {
                setData(prevArray => [...prevArray, response.data])
                return axios.get(response.data.PreviousURL)
            })
            .then(response => {
                setData(prevArray => [...prevArray, response.data])
                return axios.get(response.data.PreviousURL)
            })
            .then(response => {
                setData(prevArray => [...prevArray, response.data])
                return axios.get(response.data.PreviousURL)
            })
            .then(response => {
                setData(prevArray => [...prevArray, response.data])
                return axios.get(response.data.PreviousURL)
            })
            .then(response => {
                setData(prevArray => [...prevArray, response.data])
                return axios.get(response.data.PreviousURL)
            })
            .then(response => {
                setData(prevArray => [...prevArray, response.data])
                return axios.get(response.data.PreviousURL)
            })
            .then(response => {
                setData(prevArray => [...prevArray, response.data])
                return axios.get(response.data.PreviousURL)
            })
            .then(response => {
                setData(prevArray => [...prevArray, response.data])
                return axios.get(response.data.PreviousURL)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        getHistory()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <NavLink to={'*'} className={css.back}>Вернуться на главную страницу</NavLink>
            <h1 className={css.title}>
                {`${props.name} (${props.code})`}
            </h1>

            <div className={css.categories}>
                <div className={css.category}>Дата</div>
                <div className={css.category}>Цена, ₽</div>
            </div>

            <div className={css.block}>
                <div className={css.item}>
                    <div>{props.date}</div>
                    <div>{props.value}</div>
                </div>

                <div>
                    {
                        data.map(elem => {
                            const date = elem.Date ? elem.Date.substring(0, 10) : ''
                            const value = elem.Valute[props.code].Value ? elem.Valute[props.code].Value : ''

                            return (
                                <div className={css.item} key={value}>
                                    <div>{date}</div>
                                    <div>{value}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ValuteHistory