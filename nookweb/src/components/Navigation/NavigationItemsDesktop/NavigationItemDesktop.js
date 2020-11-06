import React from 'react';

import classes from './NavigationItemDesktop.module.css'
import { Link } from 'react-router-dom';

const NavigationItems = (props) => {
    let classesRespaldo=[classes.item, classes.orden]
    
    let classesSubMenu=[classes.submenu];
    if(props.showSubMenu){
            classesSubMenu.push(classes.subMenuOpen)
                        }
    return (
        <ul className={classes.NavigationItems}>
            <li className={classes.item} >
                <Link to="/quienes-somos"><span >Quienes Somos</span></Link>
            </li>
            <li 
            onClick={props.showSubmenuHandler}
            className={classesRespaldo.join(' ')}>
                <span 
                      className={classes.respaldoLink}
                      >Respaldos</span>
                        <ul className={classesSubMenu.join(' ')}>
                        <Link to="modelos-respaldos">
                         <span >Modelos</span>
                        </Link>
                        <Link to="/respaldo-options/respaldo-builder">
                        <span >Personalizalo</span>
                         </Link>
                      </ul>
                      
                   </li>
            <li 
            className={classes.item}
            > 
            <Link to="/contacto"><span >Contacto</span></Link></li>   
        </ul>
    )
}

export default NavigationItems;
