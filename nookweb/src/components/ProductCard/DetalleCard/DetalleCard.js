import React from 'react';

import classes from './DetalleCard.module.css';

const DetalleCard = ({ respaldo }) => (
        <div className={classes.detalleCard}>
            <span className={classes.closeTag}>X</span>
            <p className={classes.caracteristica}>Modelo: {respaldo.modelo}</p>
            <p className={classes.caracteristica}>Forma: {respaldo.forma}</p>
    <p className={classes.caracteristica}>Medidas: {respaldo.medida.ancho}m. x {respaldo.medida.altura}m.</p>
            <p className={classes.caracteristica}>Genero: {respaldo.genero}</p>
            <p className={classes.caracteristica}>Color: {respaldo.color}</p>
<p className={classes.caracteristica}>Tacha: {respaldo.tacha} / {respaldo.tipoTacha}</p>
        </div>
    )


export default DetalleCard;
