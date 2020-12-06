import React from 'react';
import Cromada from './Cromada.png';
import Óxido from './Óxido.png';
import Peltre from './Peltre.png';

import './../Tachas.css';

const TipoDeTacha = (props) => {
    const arrayClasses2=["tipo", "fill2"];
    let fotos={
      'Cromada': Cromada,
      'Peltre': Peltre,
      'Óxido': Óxido
    }
    return (
             <li  
            onClick={()=>props.selectTacha(props.modelo)}
            
            className={props.selectedTacha === props.modelo ? arrayClasses2.join(' '): arrayClasses2[0]}
            ><p>{props.modelo}</p>
            {
               props.modelo === "Sin tachas" ? null : 
               <img
              className="image"
              alt="img"
              src={fotos[props.modelo]}
              />
            }        
              </li>
    )
}

export default TipoDeTacha
