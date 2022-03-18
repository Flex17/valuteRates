import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {

	const [rateList, setRateList] = useState({})

	useEffect(() => {
		const url = 'https://www.cbr-xml-daily.ru/daily_json.js'

		axios.get(url)
			.then(response => {
				const valutesList = response.data.Valute

				setRateList(valutesList)
			})
			.catch(error => {
				console.log(error)
			})
	}, [setRateList])

	const date = new Date().toLocaleDateString()

	const entries = Object.entries(rateList)

	const valutesElements = entries.map(valute => {
		const id = valute[1].ID
		const code = valute[0]
		const name = valute[1].Name
		const previousValue = valute[1].Previous
		const value = valute[1].Value
		const changes = (value / previousValue * 100 - 100).toFixed(3)

		return (
			<div key={id} className='rateBlock'>
				<div className='valuteCode valuteValue'>
					{code}
					<span className="tooltipText">{name}</span>
				</div>
				<div className='valutePrice valuteValue'>
					{value}
				</div>
				<div className='valuteChanges valuteValue'>
					{changes}
				</div>
			</div>
		)
	})

	return (
		<div className='app'>
			<h1 className='title'>Курсы валют ЦБ РФ на {date}</h1>
			<div className='blocks'>
				<div className='code classification'>Код</div>
				<div className='price classification'>Цена, ₽</div>
				<div className='changes classification'>Разница по сравнению с предыдущим днем, %</div>
			</div>
			<div>
				{valutesElements}
			</div>
		</div>
	)
}

export default App