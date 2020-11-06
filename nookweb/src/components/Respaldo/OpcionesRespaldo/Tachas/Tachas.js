import React from "react";

import "./Tachas.css";
import Tacha from "./Tacha/Tacha";
import TipoDeTacha from "./TipoDeTacha/TipoDeTacha";
import { Collapse } from "react-collapse";

const Tachas = (props) => {
  const modeloConTacha =/Tacha/g;
  let opciones=null;

  if(modeloConTacha.test(props.modelo)){
    
    opciones = props.tachas.filter(tipo => (tipo.tamanio !== "Sin tachas"))
    .map((tacha, i) => (
    <Tacha 
    displayOptions={props.displayOptions}
    key={i} tacha={tacha} selectedTacha={props.selectedTacha} selectTacha={props.selectTacha}>
      <Collapse
        isOpened={props.displayOptions && props.selectedTacha === tacha.tamanio}
      >
        <ul className="listaTipos">
          {tacha.tipo.map((ejemplar, i) => (
            <TipoDeTacha
              key={i}
              modelo={ejemplar}
              selectTipoDeTacha={props.selectTipoDeTacha}
              selectedTacha={props.selectedTacha}
              tipoDeTacha={props.tipoDeTacha}
              
            />
          ))}
        </ul>
      </Collapse>
    </Tacha>
  ));
  }else{
    opciones=props.tachas.filter(tipo => (tipo.tamanio === "Sin tachas"))
    .map((tacha, i) =>(
      <Tacha 
      displayOptions={props.displayOptions}
      key={i} selectedTacha={props.selectedTacha} tacha={tacha} selectTacha={props.selectTacha}>
      <Collapse
        isOpened={props.displayOptions && props.selectedTacha === tacha.tamanio}
      >
        <ul className="listaTipos">
          {tacha.tipo.map((ejemplar, i) => (
            <TipoDeTacha
              key={i}
              modelo={ejemplar}
              selectTipoDeTacha={props.selectTipoDeTacha}
              displayOptions={props.displayOptions}
            />
          ))}
        </ul>
      </Collapse>
    </Tacha>
    ))
  }
  

  return (
    <div className="Tachas page">
      <h2>Tachas</h2>
      <div className="guideline">
        <span className="tamanioGuideline">Tamaño</span>
        <span>precio</span>
      </div>
      <div className="item">{opciones}</div>
    </div>
  );
};

export default Tachas;
