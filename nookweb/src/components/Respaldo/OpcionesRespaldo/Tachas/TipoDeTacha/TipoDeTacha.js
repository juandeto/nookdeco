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
            onClick={()=>props.selectTipoDeTacha(props.modelo)}
            
            className={props.tipoDeTacha === props.modelo ? arrayClasses2.join(' '): arrayClasses2[0]}
            ><p>{props.modelo}</p>
            <p>Diametro {props.selectedTacha === 'Tachas Medianas' ? "15mm" : "19mm"}</p>
            
              <img
              className="image"
              alt="img"
              src={fotos[props.modelo]}
              />
              </li>
    )
}

export default TipoDeTacha
