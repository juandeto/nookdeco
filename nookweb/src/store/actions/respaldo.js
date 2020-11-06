import * as actionTypes from './actionTypes';


export const onFormaSelected = (tipo, precio) =>{
    return{ 
        type: actionTypes.SET_FORMA, 
        tipo: tipo, 
        precio: precio 
    }
}

export const onMedidaSelected = (ancho, altura, precio) =>{
    return{ 
        type: actionTypes.SET_MEDIDAS, 
        ancho: ancho, 
        altura:altura, 
        precio: precio 
        }
}

export const onGeneroSelected=(tipo) =>{
    return{ 
        type: actionTypes.SET_GENERO, 
        tipo: tipo
    }
}

export const onColorSelected = (color) =>{
    return{ 
        type: actionTypes.SET_COLOR, 
        color: color
    }
}

export const onTachaSelected = (tamanio, precio) =>{
    return{ 
        type: actionTypes.SET_TACHA, 
        tamanio: tamanio, 
        precio: precio 
    }
}

export const onTipoDeTachaSelected = (tipo) =>{
    
    return{ 
        type: actionTypes.SET_TIPO_TACHA, 
        tipo: tipo
    }
}

export const onModeloSelected=(tipo, precio)=>{
    
    return{
        type: actionTypes.SET_MODELO, 
        tipo: tipo, 
        precio: precio 
    }
    }

    export const onClickOnTacha = () =>{
        return{
            type: actionTypes.DISPLAY_TACHA_OPTIONS
        }
    }

    export const onRefreshRespaldoProperties = ()=>{
        return{
            type: actionTypes.REFRESH_RESPALDO_PROPERTIES
        }
    }

    export const onLoading = () =>{
        return{
            type: actionTypes.ON_LOADING
        }
    }

    export const onAmountChange = (cantidad) =>{
        return{
            type: actionTypes.ON_AMOUNT_CHANGED,
            cantidad: cantidad
        }
    }