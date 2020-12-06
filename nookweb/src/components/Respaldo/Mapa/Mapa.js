import React from 'react'
import { Link } from 'react-router-dom';

import classes from './Mapa.module.css';

function Mapa(props) {

    const arrayClasses=[classes.etapa, classes.fill];

    const rutas=props.keys.map((key,i)=>{
     
        return <div key={i} 
        onClick={()=>props.selectRoute(key)}
    className={props.index === i ? arrayClasses.join(' '): arrayClasses[0]}>
        {i+1}</div>
    })

    
    return (
        <div className={classes.Mapa}>
            {rutas}
            <div className={classes.line}></div>
        </div>
    )
}

export default Mapa;
