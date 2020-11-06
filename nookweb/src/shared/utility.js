
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};


export const setPrice = (state, key, arrayOption, precio)=>{
   
    let newPrecio=null;
    if(key !== 'no seleccionado'){
            let index =arrayOption.findIndex(item => item.tipo === key || item.tamanio=== key)
            newPrecio=state.respaldo.precioParticular - arrayOption[index].precio;
          return newPrecio=newPrecio + precio;
            
        }else{
            
            return newPrecio=state.respaldo.precioParticular + precio;
        }
}

export const setPrecioMedidas = (state, precio, medidas) =>{
  let newPrecioMedida=null;

  if(state.respaldo.medida.ancho !== null && state.respaldo.medida.altura !== null){
      let index =medidas.findIndex(item => item.ancho === state.respaldo.medida.ancho && item.altura === state.respaldo.medida.altura)
      newPrecioMedida=state.respaldo.precioParticular - medidas[index].precio;
      newPrecioMedida=newPrecioMedida + precio;
      
  }else{
      newPrecioMedida=state.respaldo.precioParticular + precio;
  }
  return newPrecioMedida;
}
