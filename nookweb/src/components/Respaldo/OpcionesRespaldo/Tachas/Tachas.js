import React from "react";

import "./Tachas.css";
import Tacha from "./Tacha/Tacha";
import TipoDeTacha from "./TipoDeTacha/TipoDeTacha";

const Tachas = (props) => {
  const modeloConTacha =/Tacha/g;
  let opciones=null;
  if(modeloConTacha.test(props.modelo)){
    console.log(props.tachas)
    opciones = props.tachas.filter(tipo => (tipo !== "Sin tachas"))
    .map((tacha, i) =>(<TipoDeTacha
              key={i}
              modelo={tacha}
              selectTacha={props.selectTacha}
              selectedTacha={props.selectedTacha}
            />)     
    );
  }else{
    console.log(opciones)
    opciones=props.tachas.filter(tipo => (tipo === "Sin tachas"))
    .map((tacha, i) =>{
      return <p key={i} className="SinTachas">Su modelo no tiene tachas</p>
        
    } 
    )
  }
  

  return (
    <div className="Tachas page">
      <h2>Tachas</h2>
      <div className="guideline">
        <span className="tamanioGuideline">Tipo</span>
      </div>
      <div className="item">
      <ul className="listaTipos">{opciones}</ul>
      </div>
    </div>
  );
};

export default Tachas;
