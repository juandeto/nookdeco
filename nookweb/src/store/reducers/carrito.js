import * as actionTypes from './../actions/actionTypes';


const initialState ={
    basket: [],
    show: false,
    totalPrice: 0,
    loading: false,
    order:[],
    formaDePago: null,
    formaDeEnvio: null,
    envioAlInterior: false
}

const getTotalPrice = (basket) =>{
    let totalPrice=0;
    if(basket.length > 0){
        let arrayPrice=[];
        totalPrice=basket.map(item => arrayPrice.push(item.precioParticular*item.cantidad))
        
         totalPrice= arrayPrice.reduce((total, amount)=> total+amount);
    }
    return totalPrice;
}

const getEmbalajeCost=(envioAlInterior, provincia)=>{
    let costoEmbalaje= 0;
        if(!envioAlInterior && provincia !== 'G.B.A (Gran Buenos Aires)' && provincia !== 'C.A.B.A'){
            costoEmbalaje=400
        }
        if(envioAlInterior && provincia !== 'G.B.A (Gran Buenos Aires)' && provincia !== 'C.A.B.A'){
            costoEmbalaje=0
        }
        if(envioAlInterior && (provincia === 'G.B.A (Gran Buenos Aires)' || provincia === 'C.A.B.A')){
            costoEmbalaje=-400
        }
        return costoEmbalaje
}

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_BASKET:
            return{
                ...state,
        basket: [...state.basket, action.producto],
            }
        case actionTypes.REMOVE_FROM_BASKET:
            
            const index= state.basket.findIndex( product =>product.precioParticular === action.precio);
            let newBasket = [...state.basket];
            newBasket.splice(index, 1);
            
            return{
                ...state,
                basket: newBasket,
                totalPrice: state.totalPrice - action.precio
            }
        case actionTypes.GET_TOTAL_PRICE:
                return{
                    ...state,
                    totalPrice: getTotalPrice(action.basket)
                }
        case actionTypes.SHOW_INFO_BASKET:
            return{
                ...state,
                show: !state.show
            }
    case actionTypes.CREATE_ORDER:
                return{
                    ...state,
                    order: action.order
                }
    case actionTypes.FORMA_DE_PAGO:
        let descuento=0.8;
        let nuevoPrecio=state.totalPrice;
        if(action.formaDePago === "Transferencia Bancaria"){
            nuevoPrecio= nuevoPrecio*descuento;
        }
        if(action.formaDePago === "MercadoPago" && action.formaDePago !== null){
            nuevoPrecio=getTotalPrice(action.basket);
        }
        return{
            ...state,
            formaDePago: action.formaDePago,
            totalPrice: nuevoPrecio
        }
    case actionTypes.ON_LOADING:
            return{
                ...state,
                loading: !state.loading
            }
    case actionTypes.PROVINCIA_SELECTED:
        let envioAlInterior=false;
        if(action.provincia !== 'G.B.A (Gran Buenos Aires)' && action.provincia !== 'C.A.B.A'){
            envioAlInterior=true
        }else{
            envioAlInterior=false
        }
                return{
                    ...state,
                    envioAlInterior: envioAlInterior,
                    totalPrice: state.totalPrice + getEmbalajeCost(state.envioAlInterior,  action.provincia)
                }
    case actionTypes.FORMA_DE_ENVIO:
                return{
                    ...state,
                    formaDeEnvio: action.formaDeEnvio
                }
   case actionTypes.UNMOUNT_CARRITO:
                    return state=initialState;
                    
        default:
            return state;
    }
   
}

export default reducer;