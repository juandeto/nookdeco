import React from "react";

import { withRouter } from "react-router";
import classes from "./RoutesHandler.module.css";
import Mapa from "../Mapa/Mapa";
import ArrowRight from '../../Ul/Arrows/ArrowRight';
import ArrowLeft from '../../Ul/Arrows/ArrowLeft';

function RoutesHandler(props) {

  const routes = [
    "Formas",
    "Medidas",
    "Modelos",
    "Generos",
    "Colores",
    "Tachas",
  ];

  const pathname = props.history.location.pathname;

  return (
    <div className={classes.Header}>
      <h2>
        #{props.index + 1}: {routes[props.index]}
      </h2>
      <div className={classes.ArrowContainer}>
      <ArrowRight 
      pathname={pathname}
      goToRight={props.toggleRight}/>

      <ArrowLeft 
      pathname={pathname}
      goToLeft={props.toggleLeft}/>
      </div>
      <Mapa routes={routes} index={props.index} />
    </div>
  );
}

export default withRouter(RoutesHandler);
