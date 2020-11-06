import React from 'react';

import './NavigationCollapse.css';
import classes from './NavigationItems.module.css';
import { Link } from 'react-router-dom';
import {Collapse} from 'react-collapse';

const NavigationItems = (props) => {
    let classesRespaldo=[classes.item, classes.orden]
    
    let classesSubMenu=[classes.submenu];
    if(props.showSubMenu){
            classesSubMenu.push(classes.subMenuOpen)
                        }
    return (
        <ul className={classes.NavigationItems}>
            <li className={classes.item} onClick={props.closed}>
                <Link to="/quienes-somos"><span >Quienes Somos</span></Link>
            </li>
            <li 
            onClick={props.showSubmenuHandler}
            className={classesRespaldo.join(' ')}>
        
                <span 
                      className={classes.respaldoLink}
                      >Respaldos</span>
                        <Collapse isOpened={props.showSubMenu}>
                        <ul className={classes.submenu}>
                        <Link to="/modelos-respaldos">
                         <span onClick={props.closed}>Modelos</span>
                        </Link>
                        <Link to="/respaldo-options/respaldo-builder">
                        <span onClick={props.closed}>Personalizalo</span>
                         </Link>
                      </ul>
                      </Collapse>
                   </li>
            <li 
            className={classes.item}
            onClick={props.closed}> 
            <Link to="/contacto"><span >Contacto</span></Link></li>   
        </ul>
    )
}

export default NavigationItems;
