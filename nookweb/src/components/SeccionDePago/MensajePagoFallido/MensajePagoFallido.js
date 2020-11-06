import React, {Component} from 'react';


import * as actions from './../../../store/actions/index';
import Logo from './../../Ul/Logo/Logo';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './MensajePagoFallido.module.css';


class MensajePagoFallido extends Component {
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
                <p className={classes.paragraph}>¡Algo salio mal! Tu pago no se realizó.</p>
                <p className={classes.paragraph}>Intenta de nuevo. Si tenes alguna duda <Link to="/contacto">no dudes en contactarnos</Link></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(MensajePagoFallido);
