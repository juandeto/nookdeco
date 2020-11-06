import React from 'react';

import classes from './Medidas.module.css'

const Medidas = (props) => {

   
    const arrayClasses=[classes.item, classes.fill];
    const form =props.medidas.map( (medida, i) =>
    <div 
    className={props.medidaSelected.ancho===medida.ancho && props.medidaSelected.altura===medida.altura ? arrayClasses.join(' ') : arrayClasses[0]}
    key={Math.random() * 100}
    onClick={()=>props.selectMedida(medida.ancho, medida.altura, medida.precio)}>
        <span>{medida.altura.toFixed(2)}</span><span> </span>
        <span >{medida.ancho.toFixed(2)}</span>
        <span className={classes.precioOpcion}>${medida.precio}</span>
        </div>
    );
    //        return 

    return ( 
        <div className={classes.Medidas + ' page'}>
            <h2>Elegí la Medida</h2>
            <div className={classes.title}>
                <span>Altura</span><span>x</span><span>Ancho</span>
                <span >Precio</span>
                </div>
            <div className={classes.container}>
               {form}
           </div>
        </div>
     );
}
 
export default Medidas;