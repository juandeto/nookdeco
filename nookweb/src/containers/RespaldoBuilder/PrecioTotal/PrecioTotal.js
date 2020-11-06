import React from 'react';
import CurrencyFormat from 'react-currency-format';
import classes from './PrecioTotal.module.css';


function PrecioTotal(props) {
    let classesPrecio=[classes.precioTotal];
    if(props.forma !== "no seleccionado"){
      classesPrecio.push(classes.precioConForma)
    }
    return (
        <CurrencyFormat 
                renderText={(value)=>(
                <div className={classesPrecio.join(' ')}>
                        Precio Total:
            <strong>{value}</strong>
          </div>
                        )
                }
                decimalScale={2}
                value={props.precioRespaldo} 
                thousandSeparator={true}
                prefix={"$"}
                displayType={"text"}
            />
    )
}

export default PrecioTotal
