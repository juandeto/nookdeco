import React from 'react';

import TachaGrandeSeparada from './Tachas/TachaGrandeSeparada';
import TachaJuntaPerimetral from './Tachas/TachaJuntaPerimetral';
import DobleTacha from './Tachas/DobleTacha';
import SuperDobleTachaJunta from './Tachas/SuperDobleTachaJunta';
import TachaJuntaInterna from './Tachas/TachaJuntaInterna';
import Botone from './../ModelosFormaRectangular/Botone/Botone';
import Capitone from './../ModelosFormaRectangular/Capitone/Capitone';
import CapitoneDobleTacha from './Capitone/CapitoneDobleTacha';
import ConFunda from './Otros/ConFunda';
import ModeloNoValido from './../ModeloNoValido';

const ModelosFormaEsquinaRedonda = (props) => {
    let modelo = null;
    switch (props.modelo) {
        case "Tacha Grande Separada":
          modelo = <TachaGrandeSeparada />;
          break;
        case "Tacha Perimetral":
          modelo = <TachaJuntaPerimetral />;
          break;
        case "Doble Tacha":
          modelo = <DobleTacha />;
          break;
        case "Super Doble Tacha Junta":
          modelo = <SuperDobleTachaJunta />;
          break;
        case "Tacha Junta Interna":
          modelo = <TachaJuntaInterna />;
          break;
        case "Botoné":
          modelo = <Botone />;
          break;
        case "Capitone":
          modelo = <Capitone />;
          break;
        case "Capitone y Doble Tacha":
          modelo = <CapitoneDobleTacha />;
          break;
        case "Canelon Gordo":
          modelo = <ModeloNoValido />;
          break;
        case "Canelon Angosto":
          modelo = <ModeloNoValido />;
          break;
        case "Canelon Horizontal":
          modelo = <ModeloNoValido />;
          break;
        case "Con Funda":
          modelo = <ConFunda />;
          break;
    case "Con Marco en Paraiso Macizo":
            modelo = <ModeloNoValido />;
            break;
    case 'Con Marco en Paraiso Macizo y Botones':
            modelo=<ModeloNoValido />;
            break;
        default:
          modelo = null;
          break;
      }
      return modelo;
}

export default ModelosFormaEsquinaRedonda;
