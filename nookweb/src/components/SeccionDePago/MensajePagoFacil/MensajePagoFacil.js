import React, {Component} from 'react';


import * as actions from './../../../store/actions/index';
import Logo from './../../Ul/Logo/Logo';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './MensajePagoFacil.module.css';


class MensajePagoFacil extends Component {
  componentWillUnmount(){
    this.props.onUnmountCarrito()
  }
  render() { 
    return ( 
       <div className={classes.MensajePagoFacil}>
              <span className={classes.logo}>
                <Logo />
              </span>
                <section className={classes.section}>
                <p className={classes.paragraph}>Muchas gracias por tu compra.</p>
                <p className={classes.paragraph}>Recordá que el pedido sera confirmado una vez que te acerques a Rapipago / Pago Facil y abones el saldo</p>
                <p className={classes.paragraph}>Si tenes alguna duda <Link to="/contacto">no dudes en contactarnos</Link></p>
                </section>
            </div>
     );
  }
}


const mapStateToProps = (state) => {
    return {
      datosUsuario: state.carrito.order,
      formaDePago: state.carrito.formaDePago
    };
  };
const mapDispatchToProps = (dispatch) => {
    return {
      onUnmountCarrito: () => dispatch(actions.unmountCarrito())
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(MensajePagoFacil);


