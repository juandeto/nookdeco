import React from 'react';

import classes from './DataRespaldo.module.css';

function DataRespaldo(props) {
    let dataRespaldo=props.basket.map((respaldo,i )=>{
        return(
            <React.Fragment key={i}>
                <span className={classes.precio}>PRECIO: ${respaldo.precioParticular}</span>
                <span>MODELO: {respaldo.modelo}</span>
                <span>FORMA: {respaldo.forma}</span>
                <span>CANTIDAD: {respaldo.cantidad}</span>
                <span>GENERO: {respaldo.genero}</span>
                <span>COLOR {respaldo.color}</span>
                <span>ANCHO: {respaldo.medida.ancho}m.</span>
                <span>ALTURA:{respaldo.medida.altura}m.</span>
                <span>TACHA: {respaldo.tacha}</span>
                <span>TIPO DE TACHA:{respaldo.tipoTacha}</span>
            </React.Fragment>
        )
    })

    return (
        <details className={classes.DataRespaldo}>
            <summary>Data del pedido</summary>
            {dataRespaldo}
        </details>
    )
}

export default DataRespaldo;
