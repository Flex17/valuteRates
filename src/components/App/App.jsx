import { useEffect, useState } from 'react';
import axios from 'axios';
import Main from '../Main/Main';
import Spinner from '../common/Spinner/Spinner'

import css from './app.module.css';

const App = () => {

	const [rateList, setRateList] = useState({
		isLoading: true,
		valuteList: [],
		date: '',
		prevURL: ''
	})

	useEffect(() => {
		const url = 'https://www.cbr-xml-daily.ru/daily_json.js'

		axios.get(url)
			.then(response => {
				const data = response.data

				setRateList({
					valuteList: data.Valute,
					isLoading: false,
					date: data.Date.substring(0, 10),
					prevURL: data.PreviousURL
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
					<Main valuteList={rateList.valuteList} date={rateList.date} prevURL={rateList.prevURL} />
			}
		</div>
	)
}

export default App