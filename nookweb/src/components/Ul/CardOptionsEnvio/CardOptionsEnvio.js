import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';


import classes from './CardOptionsEnvio.module.css'

function CardOptionsEnvio(props) {
    let classesEnvio1 = [classes.opEnvio1];
    let classesEnvio2 = [classes.opEnvio2];
    let classesSelectorEnvio1=[classes.selectorEnvio]
    let classesSelectorEnvio2=[classes.selectorEnvio]

    if(props.formaDeEnvio === 'A convenir'){
        classesEnvio2.push(classes.selectFormaDeEnvio)
        classesSelectorEnvio2.push(classes.activeEnvio)
    }
    if(props.formaDeEnvio === 'Retiro'){
        classesEnvio1.push(classes.selectFormaDeEnvio)
        classesSelectorEnvio1.push(classes.activeEnvio)
    }

    return (
        <Auxiliary>
            <h4 className={classes.titulo}>Opciones de Envío</h4>
        <div className={classes.formaDeEnvio}>
          <div className={classesEnvio1.join(' ')}>
            <label className={classes.tipoenvioCard1}>
              <input type="radio" name="envio" id="Retiro" value="Retiro" onChange={props.envioSelected}/>
              <div className={classesSelectorEnvio1.join(' ')}></div>
              <div className={classes.info1}>
                <span>
                  <h4 className={classes.precioRetiro}>GRATIS</h4>
                  <div>Retiras por San Isidro</div>
                  <p>
                    Holmberg 875, Boulogne, San Isidro. Atencion de lunes a
                    viernes, horario a convenir.
                  </p>
                </span>
              </div>
            </label>
          </div>
          <div className={classesEnvio2.join(' ')} >
            <label className={classes.tipoenvioCard2} onChange={props.envioSelected}>
              <input
                type="radio"
                name="envio"
                id="A convenir"
                value="A convenir"
                onChange={props.envioSelected}
              />
              <div className={classesSelectorEnvio2.join(' ')}></div>
              <div className={classes.info2}>
                <span>
                  <div>A convenir</div>
                  <p>
                    Los costos del envío quedan a cargo del comprador. Las
                    locaciones fuera de C.A.B.A o G.B.A tienen un recargo de
                    $400 debido a los costos del embalaje. Telefono de
                    contacto:+54 911 55607284
                  </p>
                </span>
              </div>
            </label>
          </div>
        </div>
        </Auxiliary>
    )
}

export default CardOptionsEnvio;
