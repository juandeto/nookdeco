import React from 'react';
import MediaLinks from './../../Ul/MediaLinks/MediaLinks';
import classes from './GaleriaModelos.module.css'

const GaleriaModelos = () => {
    const pointer=(
        <svg width="35" height="35" viewBox="0 0 74 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M72 3L38.4035 30.3885C36.5443 31.9041 33.8708 31.8859 32.0324 30.3451L2 5.17391" stroke="#06D6A0" strokeWidth="6"/>
        </svg>
    )
    return (
        <div className={classes.GaleriaModelos}>
            <h1 className={classes.title}>Nuestros Modelos</h1>
            <p>Para ver fotos de los modelos visita nuestras redes sociales.</p>
            <span className={classes.shakeVertical}>{pointer}</span>
            <MediaLinks />
        </div>
    )
}

export default GaleriaModelos;
