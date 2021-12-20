import React, {FC} from 'react';
import classes from "./Loader.module.css"

const Loader: FC = () => {
    return (
        <div className={classes.wrap}>
            <div className={classes.lds}>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader