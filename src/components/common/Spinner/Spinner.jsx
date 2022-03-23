import { Oval } from "react-loader-spinner"

import css from './spinner.module.css'

const Spinner = () => {
    return (
        <div className={css.wrapper}>
            <Oval
                color="black"
                secondaryColor="grey"
                height={150}
                width={150}
            />
        </div>
    )
}

export default Spinner