import React, { useState } from 'react';

import classes from './Modelos.module.css';
import Modal from './../../../Ul/Modal/Modal';
import GaleriaModelos from './../../GaleriaModelos/GaleriaModelos';

const Modelos = (props) => {
    const [showGaleria, setShowGaleria] = useState(false);
    const arrayClasses=[classes.item, classes.fill];

    const modalHandler=() =>{
        setShowGaleria(!showGaleria);
    }
    
    const option = props.modelos.map((modelo, i)=>(
        <div 
        className={props.selectedModelo === modelo.tipo ? arrayClasses.join(' '): arrayClasses[0]}
        onClick={()=>props.selectModelo(modelo.tipo, modelo.precio)}
        key={modelo.tipo}>
            <span className={classes.tipo}>{modelo.tipo}</span>
            <span 
            onClick={modalHandler}
            className={classes.verEjemplo}>Ver Foto</span>
        <span className={classes.precio}>${modelo.precio}</span>
        </div>
    ))
    return ( 
        <div className={classes.Modelos+ ' page'}>
            <h2>Elija el modelo</h2>
            <div className={classes.guideline}>
                <span>Modelo</span>
                <span className={classes.guidelineEjemplo}>Ver Foto</span>
                <span>Precio</span>
            </div>
            <div className={classes.modeloOptions}>
            {option}
            </div>
            <Modal show={showGaleria} modalClosed={modalHandler}>
                <GaleriaModelos />
            </Modal>
        </div>
     );
}
 
export default Modelos;