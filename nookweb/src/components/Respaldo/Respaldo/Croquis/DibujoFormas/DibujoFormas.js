import React from 'react';

import Auxiliary from './../../../../../hoc/Auxiliary';
import classes from './DibujoFormas.module.css';
import { ColorDeFondo } from './../ColorDeFondo/ColorDeFondo';

function DibujoFormas(props) {
    let forma = null;
  
    let classesForma=[classes.forma]
    if(props.respaldo.forma !== 'no seleccionado'){
        classesForma.push(classes.modeloSelected)
    }

  switch (props.respaldo.forma) {
    case "Rectangular":
      forma = (
        <svg
        className={classesForma.join(' ')} 
          width="110"
          height="62"
          viewBox="0 0 110 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
        
          <rect
            x="0.25"
            y="0.25"
            width="109.5"
            height="61.5"
            fill={ColorDeFondo(props.respaldo.color)}
            stroke="#404145"
            strokeWidth="0.2px"
          />
 {props.children}
        </svg>
      );
      break;
case "Capilla":
        forma = (
            
 <svg 
 className={classesForma.join(' ')}  width="105" height="63" viewBox="0 0 98 58" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path fill={ColorDeFondo(props.respaldo.color)} d="M1 57.5V11.5C10.5 11.5 32.5 3.99999 32.5 3.99999C32.5 3.99999 48 -3.50001 67 4C86 11.5 97.5 11.5 97.5 11.5V57.5H1Z" strokeWidth="0.2px" stroke="#404145"/>
 {props.children}
 </svg>
        );
        break;
case "Oval":
            forma = (
              <svg 
              className={classesForma.join(' ')}  width="110" height="63" viewBox="0 0 110 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill={ColorDeFondo(props.respaldo.color)} strokeWidth="0.2px" d="M0.5 62.5V13.8627C32.2711 -2.63155 78.7459 -3.42011 109.5 13.8515V62.5H0.5Z"  stroke="#404145"/>
{props.children}
</svg> 
            );
            break;
case "Esquinas Redondas":
           forma = (
            <svg 
          
            className={classesForma.join(' ')}  width="110" height="62" viewBox="0 0 110 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill={ColorDeFondo(props.respaldo.color)} d="M10 0.25H100C105.385 0.25 109.75 4.61522 109.75 10V61.75H0.25V10C0.25 4.61523 4.61522 0.25 10 0.25Z" stroke="#404145" strokeWidth="0.2px"/>
{props.children}
</svg>
                );
                break;
    default:
        forma =<p className={classes.mensajeInicio}>Arma tu respaldo en pasos. <br /> Selecciona una forma para comenzar.</p>
      break;
  }
    return (
        <Auxiliary>
            {forma}
        </Auxiliary>
    )
}

export default DibujoFormas
