import React from "react";

import { colores } from './../../Respaldo/Croquis/ColorDeFondo/ColorDeFondo';
import classes from "./Colores.module.css";

const Colores= (props) => {

  let options = null;
  if (props.generoParaColor === "no seleccionado") {
    return (options = (
      <p className={classes.mensaje}>
        Para seleccionar un color, primero debe seleccionar un género. Por
        favor, vuelva al paso anterior.
      </p>
    ));
  } else {

    let index = props.color.findIndex(
      (item) => item.tipo === props.generoParaColor
    );
    options = props.color[index].color.map((color) => {
      
      const divStyle={backgroundImage: `url(${colores(color)})`}
      return (
        <span key={color} onClick={() => props.selectColor(color)}>
          <div className={classes.colorImg} style={divStyle}></div>
          <div className={classes.nombreColor}>{color}</div>
        </span>
      );
    });
  }

  return (
    <div className={classes.Colores + " page"}>
      <h2>Elegi tu color</h2>
      <p className={classes.warning}>**Los colores desplegados pueden no tener una exactitud del 100%, aunque se aproximan mucho.</p>
      <div>{options}</div>
    </div>
  );
}

export default Colores;
