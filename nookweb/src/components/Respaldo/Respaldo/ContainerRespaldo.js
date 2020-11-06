import React from "react";

import classes from "./ContainerRespaldo.module.css";
import Croquis from './Croquis/Croquis';

const Respaldo = (props) => {


 const arrayClasses=[classes.containerRespaldo];
 let modelo=null;
 let tacha=null;
 let tipoDeTacha=null;
 let color=null;
  let genero=null;
  let ancho=null;
  let altura=null;
  let listaCaracteristicas=null;
  if(props.respaldo.medida.ancho && props.respaldo.medida.altura){
    arrayClasses.push(classes.conMedidas);
    ancho=<span className={classes.ancho}><strong>Ancho:</strong> {props.respaldo.medida.ancho.toFixed(2)} m.</span>
    altura=<span className={classes.altura}><strong>Altura:</strong> {props.respaldo.medida.altura.toFixed(2)} m.</span>
  }
  if(props.respaldo.genero !== 'no seleccionado'){ genero=<p><strong>Género:</strong> {props.respaldo.genero}</p>   }
    if(props.respaldo.modelo !== 'no seleccionado' ){modelo=<p><strong>Modelo:</strong> {props.respaldo.modelo}</p>}
    if(props.respaldo.color !== 'no seleccionado'){color=<p><strong>Color:</strong> {props.respaldo.color}</p>};
    if(props.respaldo.tacha !== 'no seleccionado' ){tacha=<p><strong>Tacha:</strong> {props.respaldo.tacha}</p>}
    if(props.respaldo.tipoTacha !== '' ){tipoDeTacha=<p><strong>Tipo de tacha:</strong> {props.respaldo.tipoTacha}</p>}
  
  listaCaracteristicas =<span className={classes.caracteristicas}>{modelo}{tacha}{tipoDeTacha}{genero}{color}</span>

  return (
      <div className={arrayClasses.join(' ')}>
        {listaCaracteristicas}
        {altura}
        <div
        
        className={classes.respaldo}>
          <Croquis respaldo={props.respaldo}/>
        </div>
        {ancho}
      </div>
  );
};

export default Respaldo;
