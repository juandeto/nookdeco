import React, { Component } from "react";

import * as actions from './store/actions/index'
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./containers/Home/Home";
import RespaldoBuilder from "./containers/RespaldoBuilder/RespaldoBuilder";
import ResumenRespaldo from "./components/Respaldo/ResumenRespaldo/ResumenRespaldo";
import Carrito from "./containers/Carrito/Carrito";
import MensajeTrasPago from "./components/SeccionDePago/MensajeTrasPago/MensajeTrasPago";
import AdminLayout from './containers/AdminLayout/AdminLayout';
import Logout from './containers/Auth/Logout/Logout';
import Auth from './containers/Auth/Auth';
import Contacto from './components/Contacto/Contacto';
import GaleriaModelos from './components/Respaldo/GaleriaModelos/GaleriaModelos';
import QuienesSomos from './components/QuienesSomos/QuienesSomos';
import MensajePagoFacil from './components/SeccionDePago/MensajePagoFacil/MensajePagoFacil';
import MensajePagoFallido from './components/SeccionDePago/MensajePagoFallido/MensajePagoFallido';

class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSignUp();
  }

  render() {
    let notPaying = (
      <Layout>
        <Switch>
          <Route
            path="/respaldo-options/respaldo-builder"
            component={RespaldoBuilder}
          />
          <Route
            path="/contacto"
            component={Contacto}
          />
          <Route path={"/quienes-somos"} component={QuienesSomos} />
          <Route path={"/modelos-respaldos"} component={GaleriaModelos} />
          <Route path={"/resumen-respaldo"} component={ResumenRespaldo} />
          <Route path={"/carrito"} component={Carrito} />
          <Route path="/admin-user" component={AdminLayout} />
          <Route path={"/admin"} component={Auth} />
          <Route path={"/logout"} component={Logout} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    );

    if (this.props.history.location.pathname === "/pagos") {
      notPaying = <Route path="/pagos" component={MensajeTrasPago} />;
    }
 if (this.props.history.location.pathname === "/pagodiferido") {
      notPaying = <Route path="/pagodiferido" component={MensajePagoFacil} />;
    }
    if (this.props.history.location.pathname === "/pagofallido") {
      notPaying = <Route path="/pagofallido" component={MensajePagoFallido} />;
    }

    return notPaying;
  }
}


const mapDispatchToProps = dispatch =>{
  return{
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
