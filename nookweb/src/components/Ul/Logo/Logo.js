import React from 'react';
import {useHistory} from 'react-router-dom'
import classes from './Logo.module.css';

const Logo =()=>{
    const history = useHistory()
    return (
        <div className={classes.Logo} onClick={() => history.push("/respaldo-options/respaldo-builder")}>
            <h2 className={classes.Nook}>Nook</h2>
            <h2>Mariana Lacroze</h2>
        </div>
    )
}


export default Logo
