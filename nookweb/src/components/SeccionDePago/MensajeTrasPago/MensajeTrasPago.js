import React, {Component} from 'react';


import * as actions from './../../../store/actions/index';
import Logo from './../../Ul/Logo/Logo';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './MensajeTrasPago.module.css';

class SeccionDePago extends Component {
  componentWillUnmount(){
    this.props.onUnmountCarrito()
  }
 

  
  render() { 
    const mensajeTransferencia =<p className={classes.paragraph}><strong>También te enviamos los datos para realizar la transferencia</strong></p>;
    return ( 
       <div className={classes.MensajeTrasPago}>
              <span className={classes.logo}>
                <Logo />
              </span>
                <section className={classes.section}>
                <p className={classes.paragraph}>Te hemos enviado a tu email ({this.props.location.search ? new URLSearchParams(this.props.location.search).get("email") : ""}) los datos de tu compra (caracteristicas, plazos, entrega, etc.).</p>
                {this.props.formaDePago === 'Transferencia Bancaria' ? mensajeTransferencia : null}
                <p className={classes.paragraph}>Pronto nos estaremos comunicando con vos al {this.props.location.search ? new URLSearchParams(this.props.location.search).get("phone") : ""}. Si tenes alguna duda <Link to="/contacto">no dudes en contactarnos</Link></p>
                <p className={classes.paragraph}></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(SeccionDePago);
