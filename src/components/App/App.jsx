import Main from '../Main/Main';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../Spinner/Spinner'

import css from './app.module.css';

const App = () => {

	const [rateList, setRateList] = useState({
		isLoading: true,
		valuteList: [],
		date: ''
	})

	useEffect(() => {
		const url = 'https://www.cbr-xml-daily.ru/daily_json.js'

		axios.get(url)
			.then(response => {
				const data = response.data

				setRateList({
					valuteList: data.Valute,
					isLoading: false,
					date: data.Date.substring(0, 10)
				})
			})
			.catch(error => {
				console.log(error)
			})
	}, [setRateList])

	return (
		<div className={css.app}>
			{
				rateList.isLoading ?
					<Spinner />
					:
					<Main valuteList={rateList.valuteList} date={rateList.date} />
			}
		</div>
	)
}

export default App