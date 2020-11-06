import React from "react";

import Auxiliary from "./../../../../../hoc/Auxiliary";
import ModelosFormaRectangular from './ModelosFormaRectangular/ModelosFormaRectangular';
import ModelosFormaCapilla from './ModelosFormaCapilla/ModelosFormaCapilla';
import ModelosFormaOval from './ModelosFormaOval/ModelosFormaOval';
import ModelosFormaEsquinaRedonda from "./ModelosFormaEsquinaRedonda/ModelosFormaEsquinaRedonda";


function DibujoModelos(props) { 
  let modelo = null;
  if (props.forma === "Rectangular") {
    modelo=<ModelosFormaRectangular modelo={props.modelo}/>
  }
  if (props.forma === "Capilla") {
    modelo=<ModelosFormaCapilla modelo={props.modelo}/>
  }
  if (props.forma === "Oval") {
    modelo=<ModelosFormaOval modelo={props.modelo}/>
  }
  if (props.forma === "Esquinas Redondas") {
    modelo=<ModelosFormaEsquinaRedonda modelo={props.modelo}/>
  }

  return <Auxiliary>{modelo}</Auxiliary>;
}

export default DibujoModelos;
