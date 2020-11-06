import React from 'react';

import classes from './ItemGenero.module.css'

const ItemGenero = (props) => {
    const arrayClasses = [classes.item, classes.fill];
   
    return(
    <div
      className={props.generoSelected === props.genero.tipo? arrayClasses.join(" ") : arrayClasses[0]}
      key={props.genero.tipo}
      onClick={() => props.selectGenero(props.genero.tipo)}
    >
      <span className={classes.tipo}>{props.genero.tipo}</span>
    </div>
)
}
export default ItemGenero
