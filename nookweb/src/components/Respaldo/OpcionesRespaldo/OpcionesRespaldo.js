import React  from 'react';


import Auxiliary from './../../../hoc/Auxiliary';
import * as actions from './../../../store/actions/index';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Formas from "./Formas/Formas";
import Medidas from "./Medidas/Medidas";
import GenerosYColores from "./GenerosYColores/GenerosYColores";
import Tachas from "./Tachas/Tachas";
import Modelos from "./Modelos/Modelos";
import Colores from "./Colores/Colores";

const OpcionesRespaldo =(props)=> {


    const tachaSelect = (tamanio, precio, tipo)=>{
        if(tipo.length > 0){ 
          //pongo un condicional para que si clickeas "sin tachas" no se despache esa accion que cambia el displayTachaOptions a true
           props.onClickOnTacha()
        }
       
        props.onTachaSelected(tamanio, precio)
      }
  
      const tipoDeTachaSelect=(tipo) =>{
        props.onTipoDeTachaSelected(tipo)
      }
  


    return (
        <Auxiliary>
            <Route 
          render={({location})=>(
         <TransitionGroup>
          <CSSTransition
          key={location.key}
          timeout={400}
          className="fade">
          <Switch location={location}>
            <Route path={props.baseUrl + "/medidas"}>
              <Medidas
              medidaSelected={props.respaldo.medida}
                medidas={props.opciones.medidas}
                selectMedida={props.onMedidaSelected}
              />
            </Route>
            <Route path={props.baseUrl + "/generosycolores"}>
              <GenerosYColores
              modelo={props.respaldo.modelo}
                generos={props.opciones.generos}
                generoSelected={props.respaldo.genero}
                selectGenero={props.onGeneroSelected}
              />
            </Route>
            <Route path={props.baseUrl + "/colores"}>
              <Colores
                color={props.opciones.generos}
                generoParaColor={props.respaldo.genero}
                selectColor={props.onColorSelected}
                colorSelected={props.respaldo.color}
              />
            </Route>
            <Route path={props.baseUrl + "/tachas"}>
              <Tachas
                modelo={props.respaldo.modelo}
                displayOptions={props.displayOptions}
                tachas={props.opciones.tachas}
                selectedTacha={props.respaldo.tacha}
                selectTacha={tachaSelect}
                selectTipoDeTacha={tipoDeTachaSelect}
                tipoDeTacha={props.respaldo.tipoTacha}
                
              />
            </Route>
            <Route path={props.baseUrl + "/modelos"}>
              <Modelos
                selectModelo={props.onModeloSelected}
                selectedModelo={props.respaldo.modelo}
                modelos={props.opciones.modelos}
              />
            </Route>
            <Route path={props.baseUrl + "/"} exact>
              <Formas
                formas={props.opciones.formas}
                selected={props.onFormaSelected}
                tachaSelected={props.respaldo.forma}
              />
            </Route>
          </Switch>
          </CSSTransition>
          </TransitionGroup>
          )}/>
        </Auxiliary>
    )
}

const mapStateToProps = (state) => {
    return {
      respaldo: state.respaldo.respaldo,
      displayOptions: state.respaldo.displayTachaOptions,
      precioRespaldo: state.respaldo.respaldo.precioParticular,
      basket: state.carrito.basket
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onFormaSelected: (tipo, precio) =>
        dispatch(actions.onFormaSelected(tipo, precio)),
      onMedidaSelected: (altura, ancho, precio) =>
        dispatch(actions.onMedidaSelected(altura, ancho, precio)),
      onGeneroSelected: (tipo, precio) =>
        dispatch(actions.onGeneroSelected(tipo, precio)),
      onColorSelected: (color) =>
        dispatch((actions.onColorSelected(color))),
      onTachaSelected: (tamanio, precio) =>
        dispatch(actions.onTachaSelected(tamanio, precio)),
      onTipoDeTachaSelected: (tipo) =>
        dispatch(actions.onTipoDeTachaSelected(tipo)),
      onModeloSelected: (tipo, precio) =>
        dispatch(actions.onModeloSelected(tipo, precio)),
      onClickOnTacha: ()=>dispatch(actions.onClickOnTacha())
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(OpcionesRespaldo)
