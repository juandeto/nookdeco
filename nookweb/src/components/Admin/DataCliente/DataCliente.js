import React from "react";

import classes from './DataCliente.module.css'

function DataCliente(props) {
  let dataCliente = (
    <React.Fragment>
      <span>EMAIL: {props.cliente.email}</span>
      <span>TELEFONO: {props.cliente.telefono}</span>
      <span>PROVINCIA: {props.cliente.provincia}</span>
    </React.Fragment>
  );

  return (
    <details className={classes.DataCliente}>
      <summary>Datos de Cliente</summary>
      {dataCliente}
    </details>
  );
}

export default DataCliente;
