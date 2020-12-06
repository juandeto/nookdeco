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
           
        <span className={classes.precio}>${modelo.precio}</span>
        </div>
    ))
    return ( 
        <div className={classes.Modelos+ ' page'}>
            <h2>Elija el modelo</h2> 
            <div
            className={classes.verEjemplo}>
            <span 
            onClick={modalHandler}
            >¡Mira Fotos de los Modelos!</span>
            </div>
            <div className={classes.guideline}>
                <span>Modelo</span>
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