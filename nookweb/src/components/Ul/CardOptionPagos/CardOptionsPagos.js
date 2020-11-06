import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';
import classes from './CardOptionsPagos.module.css';

function CardOptionPagos(props) {

    let classesPago1 = [classes.opPago1];
    let classesPago2 = [classes.opPago2];
    let classesSelectorPago1=[classes.selectorPago]
    let classesSelectorPago2=[classes.selectorPago]

    if(props.formaDePago === 'MercadoPago'){
        classesPago2.push(classes.selectFormaDePago)
        classesSelectorPago2.push(classes.activePago)
    }
    if(props.formaDePago === 'Transferencia Bancaria'){
        classesPago1.push(classes.selectFormaDePago)
        classesSelectorPago1.push(classes.activePago)
    }
    return (
        <Auxiliary>
            <h4 className={classes.datosPago}>Opciones de Pago</h4>
            <p className={classes.infoDescuento}>Pagando con transferencia bancaria tenes un 20% de descuento.</p>
        <div className={classes.formaDePago}>
          <div className={classesPago1.join(' ')}>
            <label className={classes.tipoPagoCard1}>
              <input
                type="radio"
                name="formaDePago"
                id="Transferencia Bancaria"
                value="Transferencia Bancaria"
                onChange={props.formaDePagoSelected}
              />
              <div className={classesSelectorPago1.join(' ')}></div>
              <div className={classes.infoPago1}>
                <span>
                <h4 className={classes.Descuento}>- 20%</h4>
                  <div>Transferencia Bancaria</div>
                  <p>
                    Te enviaremos un email con nuestros datos bancarios para que
                    nos transfieras
                  </p>
                </span>
              </div>
            </label>
          </div>
          <div className={classesPago2.join(' ')}>
            <label className={classes.tipoPagoCard2}>
              <input
                type="radio"
                name="formaDePago"
                id="MercadoPago"
                value="MercadoPago"
                onChange={props.formaDePagoSelected}
              />
              <div className={classesSelectorPago2.join(' ')}></div>
              <div className={classes.infoPago2}>
                <span>
                  <div>MercadoPago</div>
                  <p>
                    Paga con tarjetas de débito, crédito o con tu dinero
                    guardado en MercadoPago. También ofrecemos pagos en cuotas.
                  </p>
                </span>
              </div>
            </label>
          </div>
        </div>
        </Auxiliary>
    )
}

export default CardOptionPagos
