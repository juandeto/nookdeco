import React, { Component } from "react";

import { connect } from "react-redux";
import classes from "./RespaldoBuilder.module.css";
import './RespaldoBuilder.css'
import ContainerRespaldo from "../../components/Respaldo/Respaldo/ContainerRespaldo";
import RoutesHandler from '../../components/Respaldo/RoutesHandler/RoutesHandler';
import PrecioTotal from './PrecioTotal/PrecioTotal'
import OpcionesRespaldo from "../../components/Respaldo/OpcionesRespaldo/OpcionesRespaldo";


class RespaldoBuilder extends Component {
  state = {
    index: 0,
    opciones: {
      formas:[
        {
          tipo: "Rectangular",
          precio: 0
        },
        {
          tipo: "Capilla",
          precio: 1200
        },
        {
          tipo: "Oval",
          precio: 1200
        },
        {
          tipo: "Esquinas Redondas",
          precio: 1200
        },
      ],
      medidas:[
        {
          altura: 1.20,
          ancho: 1.00,
          precio: 12000
        },
        {
          altura: 1.20,
          ancho: 1.40,
          precio: 12800
        },
        {
          altura: 1.20,
          ancho: 1.60,
          precio: 14000
        },
        {
          altura: 1.20,
          ancho: 1.80,
          precio: 15500
        },
        {
          altura: 1.20,
          ancho: 2.00,
          precio: 16500
        },
        {
          altura: 1.20,
          ancho: 2.20,
          precio: 18000
        },
      ],
      generos:[
        {
          tipo: 'Lino Spazio',
          color:['Grudo', 'Beige Spazio', 'Stone', 'Lino', 'Arena', 'Cielo', 'Azul', 'Rojo', 'Gamo', 'Chocolate', 'Petroleo', 'Negro Spazio', 'Gris Spazio']
        },
        {
          tipo: 'Lino Prego',
          color:['Tiza', 'Ceniza', 'Carbón', 'Negro', 'Natural', 'Niebla', 'Madera', 'Lila', 'Pink', 'Limón','Turquesa', 'Azul Lavado', 'Marino', 'Guinda', 'Café']
        },
        {
          tipo: 'Pana Paul',
          color:['Crudo Paul', 'Beige Paul', 'Lino Paul', 'Tostado', 'Azul Paul', 'Gris Paul', 'Topo']
        },
        {
          tipo: 'Pana Donn',
          color:['Piel', 'Beige Donn', 'Marrón', 'Gamuza', 'Sambayon', 'Agua', 'Esmeralda', 'Verde Ingles', 'Tinto', 'Magenta', 'Mora', 'Blue', 'Gris Medio', 'Gris', 'Azabache']
        },
        {
          tipo: 'Tusor Rayado',
          color:['Gris Rayado', 'Blue Rayado', 'Humo Rayado', 'Beige Rayado', 'Blanco c/ Fondo Gris']
        },
        {
          tipo: 'Tusor Liso',
          color:['Blanco', 'Crudo', 'Beige Tusor', 'Perla', 'Plata', 'Musgo', 'Plomo', 'Savora', 'Rosa', 'Marino Tusor' ]
        },
        {
          tipo: 'Ecocuero',
          color:['Blanco 1', 'Natural 4', 'Marron 5', 'Beige 3', 'Gris 9', 'Negro 11', 'Beige 7']
        },
      ],
      tachas:[
        {
          tamanio: 'Sin tachas',
          precio: 0,
          tipo:[]
        },
        {
          tamanio: 'Tachas Medianas',
          precio: 600,
          tipo:['Óxido', 'Peltre', 'Cromada']
        },
        {
          tamanio: 'Tachas Grandes',
          precio: 800,
          tipo:['Óxido', 'Peltre', 'Cromada']
        },
      ],
      modelos:[
        {
          tipo:'Liso',
          precio: 0
        },
        {
          tipo:'Tacha Grande Separada',
          precio: 1200
        },
        {
          tipo:'Tacha Perimetral',
          precio:1440
        },
        {
          tipo:'Doble Tacha',
          precio: 2400
        },
        {
          tipo:'Super Doble Tacha Junta',
          precio: 3600
        },
        {
          tipo:'Tacha Junta Interna',
          precio: 1440
        },
         {
          tipo:'Botoné',
          precio: 1800
        },
        {
          tipo:"Capitone",
          precio: 10200
        },
        {
          tipo:"Capitone y Doble Tacha",
          precio: 12600
        },
        {
          tipo:'Canelon Gordo',
          precio: 10200
        },
        {
          tipo:'Canelon Angosto',
          precio: 11400
        },
        {
          tipo:'Canelon Horizontal',
          precio: 10200
        },
        {
          tipo: "Con Funda Lisa",
          precio: 5400,
        },
        {
          tipo: "Con Funda Rayada",
          precio: 6600,
        },
        {
          tipo:'Con Marco en Paraiso Macizo',
          precio: 12000
        }
        ,
        {
          tipo:'Con Marco en Paraiso Macizo y Botones',
          precio: 13800
        }
      ]
    }
  };
 
  componentDidMount() {
    const baseUrl = "/respaldo-options/respaldo-builder";
    const keys = [
      "",
      "/medidas",
      "/modelos",
      "/generosycolores",
      "/colores",
      "/tachas"
    ];
    let location = this.props.history.location.pathname;

    location = location.replace(baseUrl, "");

    let index = keys.findIndex((key) => key === location);
    if (index === -1) {
      return (index = 0);
    }
    this.setState({ index: index });
  }

  render() {
    const keys = [
      "/",
      "/medidas",
      "/modelos",
      "/generosycolores",
      "/colores",
      "/tachas"
      
    ];
    
    const toggleRoutesHandlerLeft = (location) => {
      location = location.replace(baseUrl, "");
      let index = this.state.index;
      if (keys[index - 1] === undefined ) {
        return;
      }
      if(keys[index - 1] === "/tachas" && this.props.respaldo.tacha === "Sin tachas"){
        return this.props.history.push(baseUrl + keys[index - 2]);
      }
      this.setState({ index: index - 1 });
      return this.props.history.push(baseUrl + keys[index - 1]);
    };

    const toggleRoutesHandlerRight = (location) => {
      location = location.replace(baseUrl, "");
      let index = keys.indexOf(location);
      if (keys[index + 1] === undefined || (keys[index + 1] === "/tachas" && this.props.respaldo.tacha === "Sin tachas")) {
        return this.props.history.push("/resumen-respaldo");
      }
      if (index === -1) {
        index = 0;
      }
      selectForma(index);
    }

    const selectForma = (index) =>{
      if(keys[index + 1] ===  "/medidas" && this.props.respaldo.forma === 'no seleccionado'){
        return alert('debe elegir una forma antes de proseguir')
      }else{
        this.setState({ index: index + 1 });
        return this.props.history.push(baseUrl + keys[index + 1]);
      }
    }
   
    const baseUrl = "/respaldo-options/respaldo-builder";
    const pathname = this.props.history.location.pathname;
  return(
      <div 
      className={classes.RespaldoBuilder}>
       {/* Seccion de visualizacion */}
        <div className={this.props.respaldo.forma === 'no seleccionado' ? classes.respaldoPreInicio: classes.croquisRespaldo}>

        <PrecioTotal forma={this.props.respaldo.forma} precioRespaldo={this.props.precioRespaldo}/>

          <ContainerRespaldo respaldo={this.props.respaldo}/>

          <RoutesHandler
       index={this.state.index}
       toggleLeft={toggleRoutesHandlerLeft}
       toggleRight={toggleRoutesHandlerRight}/>
        </div>

      {/* Seccion de opciones */}
        <div className={classes.control }>
          
         <OpcionesRespaldo 
          pathname={pathname}
          baseUrl={baseUrl}
         opciones={this.state.opciones}/>
         
        </div>
      </div>
    );
              }
              
}

const mapStateToProps = (state) => {
  return {
    respaldo: state.respaldo.respaldo,
    displayOptions: state.respaldo.displayTachaOptions,
    precioRespaldo: state.respaldo.respaldo.precioParticular,
    basket: state.carrito.basket
  };
};



export default connect(mapStateToProps, null)(RespaldoBuilder);
