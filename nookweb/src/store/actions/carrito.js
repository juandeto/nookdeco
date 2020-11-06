import * as actionTypes from "./actionTypes";

export const onShowInfo = () => {
  return {
    type: actionTypes.SHOW_INFO_BASKET,
  };
};

export const onProductAddedToBasket = (producto) => {
  return {
    type: actionTypes.ADD_TO_BASKET,
    producto: producto,
  };
};

export const onGettingTotalPrice = (basket) => {
  return {
    type: actionTypes.GET_TOTAL_PRICE,
    basket: basket,
  };
};

export const onRemoveFromBasket = (modelo, precio) => {
  return {
    type: actionTypes.REMOVE_FROM_BASKET,
    modelo: modelo,
    precio: precio,
  };
};

export const onLoading = () => {
  return {
    type: actionTypes.ON_LOADING,
  };
};

export const onCreateOrder = (order) => {
  return {
    type: actionTypes.CREATE_ORDER,
    order: order,
  };
};

export const onSelectFormaDePago = (formaDePago, basket) =>{
  return{
    type: actionTypes.FORMA_DE_PAGO,
    formaDePago: formaDePago,
    basket: basket
  };
};

export const onSelectFormaDeEnvio = (formaDeEnvio) =>{
  return{
    type: actionTypes.FORMA_DE_ENVIO,
    formaDeEnvio: formaDeEnvio
  }
};

export const onProvinciaSelected = (provincia) =>{
  return{
    type: actionTypes.PROVINCIA_SELECTED,
    provincia: provincia
  }
}

export const unmountCarrito = () =>{
  return{
    type: actionTypes.UNMOUNT_CARRITO
  }
}