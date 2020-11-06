import React from "react";

import classes from "./GenerosYColores.module.css";
import ItemGenero from './ItemGenero/ItemGenero';

const GenerosYColores = (props) => {

  let form =null
  
  
if(props.modelo === 'Con Funda Lisa'){
   // condicional para cuando el usuario eligio el modelo Con funda, ya que solo tiene opcion de elegir dos generos
   form = props.generos.filter(genero => (genero.tipo === 'Tusor Liso'))
   .map((genero, i) =>{ 
    return(<ItemGenero key={i} selectGenero={props.selectGenero} generoSelected={props.generoSelected} genero={genero} />)
  })
  
}
if(props.modelo === 'Con Funda Rayada'){
  // condicional para cuando el usuario eligio el modelo Con funda, ya que solo tiene opcion de elegir dos generos
  form = props.generos.filter(genero => (genero.tipo === 'Tusor Rayado'))
  .map((genero, i) =>{ 
   return(<ItemGenero key={i} selectGenero={props.selectGenero} generoSelected={props.generoSelected} genero={genero} />)
 })
 
}else{
  form=props.generos.filter(genero =>(genero.tipo !== "Tusor Liso" && genero.tipo !== 'Tusor Rayado'))
  .map( (genero, i) =>(<ItemGenero key={i} selectGenero={props.selectGenero} generoSelected={props.generoSelected} genero={genero} />))
}
  return (
    <div className={classes.GeneroYColor+ ' page'}>
      <h2>Elija un género</h2>
      <div className={classes.guideline}>
        <span>Tipo</span>
      </div>
      <div className={classes.opcionesFormas}>{form}</div>
    </div>
  );
};

export default GenerosYColores;
