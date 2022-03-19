import Header from '../Header/Header';
import Main from '../Main/Main';

import css from './app.module.css';

const App = () => {

	const date = new Date().toLocaleDateString()

	return (
		<div className={css.app}>
			<h1 className={css.title}>Курсы валют ЦБ РФ на {date}</h1>
			<Header />
			<Main />
		</div>
	)
}

export default App