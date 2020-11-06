import React from 'react';
import * as actions from './../../../store/actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './CarritoLink.module.css';
import CurrencyFormat from 'react-currency-format';

function Carrito(props) {

    let infoCarrito;
    if(props.basket.length >0 ){
     infoCarrito= props.basket.map((item, i)=> {
          return(
              
              <div key={i} className={classes.card}>
                  <p>Modelo y Forma:{item.modelo}, {item.forma}</p>
                    <p>Genero y color: {item.genero}, color {item.color}</p>
                  <span>Ancho: {item.medida.ancho}m.</span>
                  <span>Altura: {item.medida.altura}m.</span>
          
          <CurrencyFormat 
                renderText={(value)=>{
                    return(
                <p>Precio: {value}</p>
                        )
                }}
                decimalScale={2}
                value={item.precioParticular}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
              </div>
          );
       })
    }else{
        infoCarrito=<p style={{fontSize: '0.8rem', padding: "15px 0"}}>No tiene productos cargados al carrito.</p>
    }
   const arrayClasses =[classes.info, classes.show];

    const carrito=(<svg width="70" height="30" strokeWidth="2" viewBox="0 0 108 77" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M43 69H90" stroke="#404145"/>
    <circle cx="47" cy="73" r="3.5" stroke="#404145"/>
    <circle cx="88" cy="73" r="3.5" stroke="#404145"/>
    <path d="M0.5 0.5H13.5732C15.6385 0.5 17.4912 1.76981 18.2364 3.69598L21 10.8396M43.5 69L38.6642 56.5M38.6642 56.5H95L106.5 10.5L21 10.8396M38.6642 56.5L21 10.8396" stroke="#404145"/>
    </svg>
    )

    return (
        <div className={classes.Carrito}>
            <span
            onClick={() =>props.showInfo()}
            className={classes.MiCarrito}>
                {carrito}
                <p>Mi Carrito</p>
                </span>
            <div 
            className={props.show ? arrayClasses.join(' '): arrayClasses[0]} >
                {infoCarrito}
                {props.basket.length >0 ?
                 <CurrencyFormat 
                 renderText={(value)=>{
                     return(
                <p className={classes.totalPrice}>
                    Total ({props.basket.length} {props.basket.length > 1 ? "productos":"proucto"}): {value}</p>
                         )
                 }}
                 decimalScale={2}
                 value={props.totalPrice} //Homework
                 displayType={"text"}
                 thousandSeparator={true}
                 prefix={"$"}
                 fixedDecimalScale={true}
             />
                 
                : null}
            {props.basket.length >0 ? <Link to="/carrito"><button onClick={() =>props.showInfo()}>Ir al carrito</button></Link> : null}
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        basket: state.carrito.basket,
        show: state.carrito.show,
        totalPrice: state.carrito.totalPrice
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        showInfo: ()=> dispatch(actions.onShowInfo())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Carrito)



