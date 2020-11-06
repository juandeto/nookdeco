import React, { useState } from 'react';

import classes from './ProductCard.module.css';
import CurrencyFormat from 'react-currency-format';
import Modal from './../Ul/Modal/Modal';
import DetalleCard from './DetalleCard/DetalleCard';

const ProductCard = props => { 
    const [ showDetails, setShowDetails ] = useState(false);
    const hideDetails = () =>{
        setShowDetails(false);
    }
    
    return (
    <div className={classes.productCard}>
    <h3>respaldo: {props.product.modelo} / {props.product.genero}</h3>
    <CurrencyFormat 
          renderText={(value)=>{
              return(
         <p>
      precio individual: <strong>{value}</strong>
    </p>
                  )
          }}
          decimalScale={2}
          value={props.product.precioParticular} //Homework
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          fixedDecimalScale={true}
      />
    
    <p>
      cantidad: <strong>{props.product.cantidad}</strong>
    </p>
    <div className={classes.options}>
       <span
    className={classes.verDetalle}
    onClick={() => setShowDetails(true)}>
        Ver Detalle
    </span>
    
    <span
      onClick={() =>
        props.RemoveFromBasket(
            props.product.modelo,
            props.product.precioParticular
        )
      }
      className={classes.remover}
    >
      Remover
    </span> 
    </div>
    
    <Modal show={showDetails} modalClosed={hideDetails}>
      <DetalleCard respaldo={props.product} />
    </Modal>
  </div>
    )
}

export default ProductCard;
