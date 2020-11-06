import React from 'react';

import classes from './ItemOrder.module.css';
import DataRespaldo from "./../DataRespaldo/DataRespaldo";
import DataCliente from "./../DataCliente/DataCliente";

const  ItemOrder =(props) => {
    let clasesPago = [classes.nopagado, classes.pagado];
    let clasesEntregado = [classes.noentregado, classes.entregado];

    let pagado = (
        <label className={props.order.pagado ? clasesPago.join(" ") : clasesPago[0]}>
          {props.order.pagado ? 'PAGADO' :'NO PAGADO'}
          <input onChange={() => props.orderPagoHandler(props.order.id)} type="checkbox"  />
        </label>
      );

let entregado = (
  <label className={props.order.entregado ? clasesEntregado.join(" ") : clasesEntregado[0]}>
    {props.order.entregado ? "ENTREGADO" : "NO ENTREGADO"}
    <input onChange={() => props.formaDeEnvioHandler(props.order.id)} type="checkbox"  />
  </label>
);

return (
  <details className={classes.orden}>
    <summary>
      <span className={classes.nombre} >{props.order.orderData.nombre}</span>
      <span className={classes.date}>{props.order.date}</span>
      <span onClick={()=>props.deleteOrderHandler(props.order)}className={classes.btnEliminar}>ELIMINAR</span>
    </summary>
    
    <div className={classes.dataOrden}>
    <div className={classes.formaDePago}>Precio Final de la orden: ${props.order.price}</div>
      <div className={classes.pagosContainer}>{pagado}</div>
      <div className={classes.formaDePago}>Forma de pago: {props.order.formaDePago}</div> 
      {entregado}
      <div className={classes.formaDePago}>Forma de Envio: {props.order.formaDeEnvio}</div>
      <DataRespaldo basket={props.order.basket} />
      <DataCliente cliente={props.order.orderData} />

    </div>

  </details>
);
}

export default ItemOrder
