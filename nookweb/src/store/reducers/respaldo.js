import * as actionTypes from "./../actions/actionTypes";
import {
  updateObject,
  setPrice,
  setPrecioMedidas,
} from "./../../shared/utility";

const initialState = {
  respaldo: {
    forma: "no seleccionado",
    medida: {
      ancho: null,
      altura: null,
    },
    genero: "no seleccionado",
    color: "no seleccionado",
    tacha: "no seleccionado",
    modelo: "no seleccionado",
    cantidad: 1,
    precioParticular: 0,
  },
  displayTachaOptions: false,
};

const formas = [
  {
    tipo: "Rectangular",
    precio: 540,
  },
  {
    tipo: "Capilla",
    precio: 2945,
  },
  {
    tipo: "Oval",
    precio: 2945,
  },
  {
    tipo: "Esquinas Redondas",
    precio: 2945,
  },
];


const medidas = [
  {
    altura: 1.20,
    ancho: 1.0,
    precio:20250 
  },
  {
    altura: 1.20,
    ancho: 1.4,
    precio: 21600,
  },
  {
    altura: 1.20,
    ancho: 1.6,
    precio: 23625,
  },
  {
    altura: 1.20,
    ancho: 1.8,
    precio: 25515,
  },
  {
    altura: 1.20,
    ancho: 2.0,
    precio: 26865,
  },
  {
    altura: 1.20,
    ancho: 2.10,
    precio: 29565
  },
  {
    altura: 1.20,
    ancho: 2.2,
    precio: 30915,
  },
];


const modelos = [
  {
    tipo: "Liso",
    precio: 540,
  },
  {
    tipo: "Tacha Grande Separada",
    precio: 2945,
  },
  {
    tipo: "Tacha Perimetral",
    precio: 3200,
  },
  {
    tipo: "Doble Tacha",
    precio: 4200,
  },
  {
    tipo: "Super Doble Tacha Junta",
    precio: 4500,
  },
  {
    tipo: "Tacha Junta Interna",
    precio: 3500,
  },
  {
    tipo: "Botoné",
    precio: 2700,
  },
  {
    tipo: "Capitone",
    precio: 14500,
  },
  {
    tipo: "Capitone y Doble Tacha",
    precio: 15500,
  },
  {
    tipo: "Canelon Gordo",
    precio: 1200,
  },
  {
    tipo: "Canelon Angosto",
    precio: 14000,
  },
  {
    tipo: "Canelon Horizontal",
    precio: 12000,
  },
  {
    tipo: "Con Funda Lisa",
    precio: 9350,
  },
  {
    tipo: "Con Funda Rayada",
    precio: 13500,
  },
  {
    tipo: "Con Marco en Paraiso Macizo",
    precio: 17500,
  },
  {
    tipo: "Con Marco en Paraiso Macizo y Botones",
    precio: 18500,
  },
];

const setForma = (state, tipo, precio) => {
  const updatedRespaldo = updateObject(state.respaldo, {
    forma: tipo,
    precioParticular: setPrice(state, state.respaldo.forma, formas, precio),
  });
  const updatedState = { respaldo: updatedRespaldo };
  return updateObject(state, updatedState);
};

const setMedidas = (state, ancho, altura, precio) => {
  const updatedRespaldo = updateObject(state.respaldo, {
    medida: { ancho: ancho, altura: altura },
    precioParticular: setPrecioMedidas(state, precio, medidas),
  });
  const updatedState = { respaldo: updatedRespaldo };
  return updateObject(state, updatedState);
};

const setGenero = (state, tipo) => {
  const updatedRespaldo = updateObject(state.respaldo, {
    genero: tipo, color: "no seleccionado"
  });
  const updatedState = { respaldo: updatedRespaldo };
  return updateObject(state, updatedState);
};

const setColor = (state, color) => {
  const updatedRespaldo = updateObject(state.respaldo, { color: color });
  const updatedState = { respaldo: updatedRespaldo };
  return updateObject(state, updatedState);
};

const setTacha = (state, tacha, precio) => {
  const updatedRespaldo = updateObject(state.respaldo, {
    tacha: tacha
  });
  const updatedState = { respaldo: updatedRespaldo };
  return updateObject(state, updatedState);
};

const setModelo = (state, tipo, precio) => {
  const modeloConTacha =/Tacha/g;
let setSinTachas='no seleccionado';
  if(modeloConTacha.test(tipo) === false){
    setSinTachas="Sin tachas"
  }
  
  const updatedRespaldo = updateObject(state.respaldo, {
    modelo: tipo,
    precioParticular: setPrice(state, state.respaldo.modelo, modelos, precio),
    tacha: setSinTachas
  });
  const updatedState = { respaldo: updatedRespaldo };
  return updateObject(state, updatedState);
};

const onAmountChange = (state, cantidad) => {
  const updatedRespaldo = updateObject(state.respaldo, { cantidad: cantidad });
  const updatedState = { respaldo: updatedRespaldo };
  return updateObject(state, updatedState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FORMA:
      return setForma(state, action.tipo, action.precio);
    case actionTypes.SET_MEDIDAS:
      return setMedidas(state, action.ancho, action.altura, action.precio);
    case actionTypes.SET_GENERO:
      return setGenero(state, action.tipo, action.precio);
    case actionTypes.SET_COLOR:
      return setColor(state, action.color);
    case actionTypes.SET_TACHA:
      return setTacha(state, action.tacha);
    case actionTypes.SET_MODELO:
      return setModelo(state, action.tipo, action.precio);
    case actionTypes.DISPLAY_TACHA_OPTIONS:
      return updateObject(state, {
        displayTachaOptions: !state.displayTachaOptions,
      });
    case actionTypes.ON_AMOUNT_CHANGED:
      return onAmountChange(state, action.cantidad);
    case actionTypes.REFRESH_RESPALDO_PROPERTIES:
      return (state = initialState);
    default:
      return state;
  }
};

export default reducer;
