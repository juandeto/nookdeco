import React from "react";

import classes from "./Formas.module.css";

const Formas = (props) => {

    const arrayClasses=[classes.item, classes.fill];


  const options = props.formas.map((forma, i) =>{ 
    let croquis='';
    if(forma.tipo === "Rectangular"){
      croquis=(
        <svg width="110" height="62" viewBox="0 0 110 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.25" y="0.25" width="109.5" height="61.5" stroke="#404145" strokeWidth="1"/>
      </svg>
      )
    }
      if(forma.tipo === "Capilla"){
    croquis=(
      <svg width="112" height="64" viewBox="0 0 112 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 63V12.8182C11.829 12.8182 36.9067 4.63636 36.9067 4.63636C36.9067 4.63636 54.5751 -3.54545 76.2332 4.63638C97.8912 12.8182 111 12.8182 111 12.8182V63H1Z" stroke="#404145" strokeWidth="1"/>
      </svg>
  
)
      }
      if(forma.tipo === "Oval"){
        croquis=(   
      <svg width="110" height="62" viewBox="0 0 110 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.25 62.0569V13.0178C32.1357 -3.60213 78.8729 -4.40309 109.75 13.0122V62.0569H0.25Z" fill="white" stroke="#404145" strokeWidth="1"/>
      </svg>
     )
      }
        if(forma.tipo === "Esquinas Redondas"){
          croquis=(
            <svg width="110" height="62" viewBox="0 0 110 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0.25H100C105.385 0.25 109.75 4.61522 109.75 10V61.75H0.25V10C0.25 4.61523 4.61522 0.25 10 0.25Z" stroke="#404145" strokeWidth="1"/>
</svg>
 
          )
              }
  
  
  return (
  <div key={forma.tipo} className={forma.tipo === props.tachaSelected ? arrayClasses.join(' '):arrayClasses[0]} 
    onClick={() => props.selected(forma.tipo, forma.precio)}>
      <span className={classes.croquis}>
      {croquis}
      </span>
      <span className={classes.tipo}>{forma.tipo}</span>
      <span className={classes.precio}>${forma.precio}</span>
    </div>
    )
    });
  
  return (
    <div className={classes.Formas+ ' page'}>
      <h2>Elegí la forma</h2>
      <div className={classes.guideline}>
        <span className={classes.formaGuideline}>Forma</span>
        <span>Precio</span>
      </div>
      <div className={classes.options}>{options}</div>
    </div>
  );
};

export default Formas;
