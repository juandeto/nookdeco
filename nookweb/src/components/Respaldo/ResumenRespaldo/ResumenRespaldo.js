import React, { Component } from "react";

import * as actions from "./../../../store/actions/index";
import { withRouter, Link } from "react-router-dom";
import classes from "./ResumenRespaldo.module.css";
import { connect } from "react-redux";
import Modal from "./../../Ul/Modal/Modal";
import Message from "./../../Message/message";
import CurrencyFormat from 'react-currency-format';
import ArrowLeft from './../../Ul/Arrows/ArrowLeft';
import Croquis from './../Respaldo/Croquis/Croquis';

class ResumenRespaldo extends Component {
  state = {
    show: false,
    cantidad: 1,
  };
  

  render() {
    const arrayClasses = [classes.Button, classes.Disabled];

    const checkFeatures = Object.values(this.props.caracteristicas).some( 
      //chequea si hay algun no seleccionado o nulo
      (item) =>{
       return(   item === "no seleccionado" ||
        item.ancho === null ||
        item.altura === null)
        
      }
       
    );

    const goToLeft =(pathname) =>{
      this.props.history.push(pathname)
    }

   const addToBasket = () => {
      this.setState({ show: true });
      this.props.onProductAddedToBasket(this.props.caracteristicas);
    };

    const handleMinusAmount = (cantidad) =>{

      if(this.state.cantidad > 1){
        let newCantidad = cantidad - 1;
        this.setState({cantidad: newCantidad});
        this.props.onAmountChange(newCantidad)
      }
    }
    
    const handlePlusAmount = (cantidad) =>{
        let newCantidad = cantidad + 1;
        this.setState({cantidad: newCantidad});
        this.props.onAmountChange(newCantidad)
    }

    return ( 
      
    <React.Fragment >
    <Modal show={this.state.show} >
          <Message />
        </Modal>
      <div className={classes.ResumenRespaldo}>
       
        <h2>Resumen Respaldo</h2>
  
          <ArrowLeft
          goToLeft={goToLeft}
          pathname={this.props.respaldo.respaldo.tacha === "Sin tachas"?"/respaldo-options/respaldo-builder/colores":"/respaldo-options/respaldo-builder/tachas"} />

        <ul className={classes.listaPrincipal}>
          <li>
            <h4 className={classes.title}>Caracteristicas:</h4>
            <div className={classes.croquisContainer}>
              <Croquis respaldo={this.props.caracteristicas}/>
            </div>
            <ul className={classes.Caracteristicas}>
              <li style={{color: this.props.caracteristicas.forma === 'no seleccionado' ? 'red' : 'none'}}>
                Forma: {this.props.caracteristicas.forma}</li>
                <li style={{color: this.props.caracteristicas.modelo=== 'no seleccionado' ? 'red' : 'none'}}>Modelo: {this.props.caracteristicas.modelo}</li>
              <li style={{color: this.props.caracteristicas.medida.altura === null ? 'red' : 'none'}}>
                Medidas:
                <ul className={classes.Medidas} >
                  <li>
                    altura:{" "}
                    {this.props.caracteristicas?.medida.altura
                      ? this.props.caracteristicas?.medida.altura.toFixed(2)
                      : "0"}{" "}
                    m.
                  </li>
                  <li>
                    ancho:{" "}
                    {this.props.caracteristicas?.medida.ancho
                      ? this.props.caracteristicas?.medida.ancho.toFixed(2)
                      : "0"}{" "}
                    m.
                  </li>
                </ul>
              </li>
              <li style={{color: this.props.caracteristicas.genero === 'no seleccionado' ? 'red' : 'none'}}>Genero: {this.props.caracteristicas.genero}</li>
              <li style={{color: this.props.caracteristicas.color === 'no seleccionado' ? 'red' : 'none'}}>Color: {this.props.caracteristicas.color}</li>
              <li style={{color: this.props.caracteristicas.tacha === 'no seleccionado' ? 'red' : 'none'}}>
                Tachas: {this.props.caracteristicas.tacha}{this.props.caracteristicas.tipoTacha === '' ? '': ' de '}
                {this.props.caracteristicas.tipoTacha}
              </li>


              <li><p>Cantidad:</p> 
                <span 
                onClick={() => handleMinusAmount(this.state.cantidad)}
                className={classes.mathSimbolMinus}>-</span>
                <input 
                disabled={true}
                value={this.state.cantidad}
                className={classes.inputCantidad}
                />
                <span 
                onClick={() => handlePlusAmount(this.state.cantidad)}
                className={classes.mathSimbolPlus}>+</span>
                </li>

            </ul>
          </li>
          
        <CurrencyFormat 
                renderText={(value)=>{
                    return(
                      <li className={classes.precioFinal}>Precio final: {value}</li>
                        )
                }}
                decimalScale={2}
                value={this.props.caracteristicas.precioParticular * this.state.cantidad}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                fixedDecimalScale={true}
            />
            
        </ul>
        {checkFeatures ? (
          <span>
            <p>
              Para agregar al carrito su respaldo debe contar con todas las
              caracteristicas seleccionadas
            </p>
            <Link to="/respaldo-options/respaldo-builder/tachas">Volver</Link>
          </span>
        ) : null}
        <button
          disabled={checkFeatures}
          onClick={addToBasket}
          className={checkFeatures ? arrayClasses.join(" ") : arrayClasses[0]}
        >
          AGREGAR AL CARRITO
        </button>
      </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    respaldo: state.respaldo,
    caracteristicas: state.respaldo.respaldo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onProductAddedToBasket: (producto) =>
      dispatch(actions.onProductAddedToBasket(producto)),
    onAmountChange: (cantidad)=>dispatch(actions.onAmountChange(cantidad))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ResumenRespaldo));
