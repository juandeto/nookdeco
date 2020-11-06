import React from 'react';

import TachaGrandeSeparada from "./Tachas/TachaGrandeSeparada";
import TachaJuntaPerimetral from "./Tachas/TachaJuntaPerimetral";
import DobleTacha from "./Tachas/DobleTacha";
import SuperDobleTacha from "./Tachas/SuperDobleTacha";
import TachaJuntaInterna from "./Tachas/TachaJuntaInterna";
import Botone from "./Botone/Botone";
import Capitone from "./Capitone/Capitone";
import CapitoneDobleTacha from "./Capitone/CapitoneDobleTacha";
import CanelonGordo from "./Canelon/CanelonGordo";
import CanelonAngosto from "./Canelon/CanelonAngosto";
import CanelonHorizontal from "./Canelon/CanelonHorizontal";
import ConFunda from "./Otros/ConFunda";
import ConMarcoParaiso from "./Otros/ConMarcoParaiso";
import ConMarcoYBotones from "./Otros/ConMarcoYBotones";

const ModelosFormaRectangular = (props) => {
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
          modelo = <SuperDobleTacha />;
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
          modelo = <CanelonGordo />;
          break;
        case "Canelon Angosto":
          modelo = <CanelonAngosto />;
          break;
        case "Canelon Horizontal":
          modelo = <CanelonHorizontal />;
          break;
        case "Con Funda":
          modelo = <ConFunda />;
          break;
        case "Con Marco en Paraiso Macizo":
          modelo = <ConMarcoParaiso />;
          break;
      case 'Con Marco en Paraiso Macizo y Botones':
          modelo=<ConMarcoYBotones />;
          break;
        default:
          modelo = null;
          break;
      }
      return modelo;
}

export default ModelosFormaRectangular;
