import css from './header.module.css'


const Header = () => {
    return (
        <div className={css.blocks}>
            <div className={`${css.code} ${css.classification}`}>Код</div>
            <div className={`${css.price} ${css.classification}`}>Цена, ₽</div>
            <div className={`${css.changes} ${css.classification}`}>Разница по сравнению с предыдущим днем, %</div>
        </div>
    )
}

export default Header