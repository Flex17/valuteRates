import css from './header.module.css'


const Header = (props) => {
    return (
        <div className={css.wrapper}>
            <h1 className={css.title}>Курсы валют ЦБ РФ на {props.date}</h1>
            <div className={css.blocks}>
                <div className={`${css.code} ${css.classification}`}>Код</div>
                <div className={`${css.price} ${css.classification}`}>Цена, ₽</div>
                <div className={`${css.changes} ${css.classification}`}>Разница по сравнению с предыдущим днем, %</div>
            </div>
        </div>
    )
}

export default Header