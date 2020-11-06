import React from 'react';

import { Link } from 'react-router-dom';
import classes from "./MediumRespaldo.module.css"

function MediumRespaldo() {
    return (
        <div className={classes.MediumRespaldo}>
            <h1>Respaldos</h1>
            <div className={classes.container}>
               <Link to="/respaldo-options/respaldo-ejemplos"><span>Nuestros Modelos</span></Link>
            <Link to="/respaldo-options/respaldo-builder"><span>Personalizalo</span></Link> 
            </div>
            
        </div>
    )
}

export default MediumRespaldo;
