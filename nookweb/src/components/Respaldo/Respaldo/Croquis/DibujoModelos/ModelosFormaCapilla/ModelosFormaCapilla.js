import React from 'react';
import TachaGrandeSeparada from '../ModelosFormaCapilla/Tachas/TachaGrandeSeparada';
import TachaJuntaPerimetral from './Tachas/TachaJuntaPerimetral';
import SuperDobleTachaJunta from './Tachas/SuperDobleTachaJunta';
import DobleTacha from './Tachas/DobleTacha';
import TachaJuntaInterna from './Tachas/TachaJuntaInterna';
import Botone from './Botone/Botone';
import Capitone from './Capitone/Capitone';
import CapitoneDobleTacha from './Capitone/CapitoneDobleTacha';
import ModeloNoValido from './../ModeloNoValido';
import ModeloNoValido2 from './../ModeloNoValido2';

function ModelosFormaCapilla(props) {
    let modelo= null;

    switch (props.modelo) {
        case "Tacha Grande Separada":
            modelo=(<TachaGrandeSeparada />);
            break;
        case 'Tacha Perimetral':
            modelo =(<TachaJuntaPerimetral />);
            break;
        case "Doble Tacha":
            modelo=(<DobleTacha />);
            break;
        case "Super Doble Tacha Junta":
            modelo=(<SuperDobleTachaJunta />);
            break;
        case "Tacha Junta Interna":
            modelo=(<TachaJuntaInterna />);
            break;
        case "Botoné":
                modelo = <Botone />;
                break;
        case "Capitone":
            modelo=(<Capitone />);
            break;
        case "Capitone y Doble Tacha":
            modelo = (<CapitoneDobleTacha />);
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
            modelo = <ModeloNoValido2 />;
            break;
        case "Con Marco en Paraiso Macizo":
                modelo = <ModeloNoValido />;
                break;
        case 'Con Marco en Paraiso Macizo y Botones':
                modelo=<ModeloNoValido />;
                break;
        default:
            modelo=null;
            break;
    }
  return modelo;
};

export default ModelosFormaCapilla;