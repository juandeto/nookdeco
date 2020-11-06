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
    tipoTacha: "",
    modelo: "no seleccionado",
    cantidad: 1,
    precioParticular: 0,
  },
  displayTachaOptions: false,
};

const formas = [
  {
    tipo: "Rectangular",
    precio: 0,
  },
  {
    tipo: "Capilla",
    precio: 1200,
  },
  {
    tipo: "Oval",
    precio: 1200,
  },
  {
    tipo: "Esquinas Redondas",
    precio: 1200,
  },
];


const medidas = [
  {
    altura: 1.20,
    ancho: 1.0,
    precio: 12000,
  },
  {
    altura: 1.20,
    ancho: 1.4,
    precio: 12800,
  },
  {
    altura: 1.20,
    ancho: 1.6,
    precio: 14000,
  },
  {
    altura: 1.20,
    ancho: 1.8,
    precio: 15500,
  },
  {
    altura: 1.20,
    ancho: 2.0,
    precio: 16500,
  },
  {
    altura: 1.20,
    ancho: 2.2,
    precio: 18000,
  },
];

const tachas = [
  {
    tamanio: "Sin tachas",
    precio: 0,
    tipo: [],
  },
  {
    tamanio: "Tachas Medianas",
    precio: 600,
    tipo: ["Óxido", "Peltre", "Plateada"],
  },
  {
    tamanio: "Tachas Grandes",
    precio: 800,
    tipo: ["Óxido", "Peltre", "Plateada"],
  },
];

const modelos = [
  {
    tipo: "Liso",
    precio: 0,
  },
  {
    tipo: "Tacha Grande Separada",
    precio: 1200,
  },
  {
    tipo: "Tacha Perimetral",
    precio: 1440,
  },
  {
    tipo: "Doble Tacha",
    precio: 2400,
  },
  {
    tipo: "Super Doble Tacha Junta",
    precio: 3600,
  },
  {
    tipo: "Tacha Junta Interna",
    precio: 1440,
  },
  {
    tipo: "Botoné",
    precio: 1800,
  },
  {
    tipo: "Capitone",
    precio: 10200,
  },
  {
    tipo: "Capitone y Doble Tacha",
    precio: 12600,
  },
  {
    tipo: "Canelon Gordo",
    precio: 10200,
  },
  {
    tipo: "Canelon Angosto",
    precio: 11400,
  },
  {
    tipo: "Canelon Horizontal",
    precio: 10200,
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
    tipo: "Con Marco en Paraiso Macizo",
    precio: 12000,
  },
  {
    tipo: "Con Marco en Paraiso Macizo y Botones",
    precio: 13800,
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
const setTacha = (state, tamanio, precio) => {
  const updatedRespaldo = updateObject(state.respaldo, {
    tacha: tamanio,
    precioParticular: setPrice(state, state.respaldo.tacha, tachas, precio),
  });
  const updatedState = { respaldo: updatedRespaldo };
  return updateObject(state, updatedState);
};

const setTipoDeTacha = (state, tipo) => {
  const updatedRespaldo = updateObject(state.respaldo, { tipoTacha: tipo });
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
      return setTacha(state, action.tamanio, action.precio);
    case actionTypes.SET_TIPO_TACHA:
      return setTipoDeTacha(state, action.tipo);
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
