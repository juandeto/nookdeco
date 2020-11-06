import React from "react";

import classes from './Croquis.module.css';
import DibujoFormas from './DibujoFormas/DibujoFormas';
import DibujoModelos from './DibujoModelos/DibujoModelos';
import TusorRayado from './ColorDeFondo/TusorRayado/TusorRayado';

function Croquis(props) {
  
  
  return <div className={classes.Croquis} >
    
      <DibujoFormas 
      id="dibujoFormas" 
      xAxis={props.xAxis} yAxis={props.yAxis}
      respaldo={props.respaldo}>
        {
          props.respaldo.genero === 'Tusor Rayado' ? <TusorRayado respaldo={props.respaldo}/>
          : null
        }
        <DibujoModelos modelo={props.respaldo.modelo} forma={props.respaldo.forma}/>
      </DibujoFormas>
  </div>;
}

export default Croquis;
