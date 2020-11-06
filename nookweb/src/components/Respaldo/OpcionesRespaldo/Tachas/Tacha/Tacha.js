import React from 'react';

import './../Tachas.css';

const Tacha = (props) => {
    const arrayClasses=["itemHeader", "fill"];
 
    let plusSimbol = (
        <span className="icon">
          <p className="simbol">+</p>
          <p>Ver más</p>
        </span>
      );
      if (props.displayOptions) {
        //condicional para que si las tachas se despliegan, cambie el icono a un "menos"
        plusSimbol = (
          <span className="icon">
            <p className="simbol">-</p>
            <p>Ver menos</p>
          </span>
        );
      }
    return (
        <ul  className="lista">
      <li className="listItem" >
        <div 
        onClick={()=>props.selectTacha(props.tacha.tamanio, props.tacha.precio, props.tacha.tipo)}
        className={props.selectedTacha  === props.tacha.tamanio ? 
        arrayClasses.join(' '): arrayClasses[0]}>
          <span className="arrow"> {
          props.tacha.tipo.length > 0 ? plusSimbol:null}</span>
          <span>{props.tacha.tamanio}</span>
          <span className="price">$ {props.tacha.precio}</span></div>

          {props.children}

          </li>
    </ul>
    )
}

export default Tacha
