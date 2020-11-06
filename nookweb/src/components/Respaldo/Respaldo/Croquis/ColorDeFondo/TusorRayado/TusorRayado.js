import React from 'react';
import BlancoFondoGrisRayado from './../FotosDeGeneros/BlancoFondoGrisRayado.png';

const TusorRayado = (props) => {
    let tipo=null;
    switch (props.respaldo.color) {
    case "Gris Rayado":
            tipo=(
        <pattern id="pattern"
           width="3" height="10"
           patternUnits="userSpaceOnUse"
           >
            <line stroke="#27303a" strokeWidth="1px" y2="10"/>
        </pattern>
            )
            break;
     case "Blue Rayado":
           tipo=(
            <pattern id="pattern"
               width="1" height="10"
               patternUnits="userSpaceOnUse"
               >
                <line stroke="#8ea4b8" strokeWidth="0.5px" y2="10"/>
            </pattern>
                )
                break;
    case "Beige Rayado":
            tipo=(
                <pattern id="pattern"
                   width="3" height="10"
                   patternUnits="userSpaceOnUse"
                   >
                    <line stroke="#dfc772" strokeWidth="1px" y2="10"/>
                </pattern>
                    )
                    break;
     case "Humo Rayado":
             tipo=(
                    <pattern id="pattern"
                       width="0.8" height="10"
                       patternUnits="userSpaceOnUse"
                       >
                        <line stroke="#bec2bc" strokeWidth="0.7px" y2="10"/>
                    </pattern>
                        )
                        break;
     case "Blanco c/ Fondo Gris":
            tipo=(
                 <pattern id="pattern"
                    width="100" height="100%"
                    patternUnits="userSpaceOnUse"
                    >
                    <image href={BlancoFondoGrisRayado} width="100%" style={{objectFit: "contain"} }/>
                   </pattern>
                     )
              break;
        default:
            tipo=null;
            break;
    }
    return (
        <defs>
        {tipo}
        </defs>
    )
}

export default TusorRayado
