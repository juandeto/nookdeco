import React, { Component } from "react";

import withErrorHandler from "./../../../hoc/withErrorHandler/withErrorHandler";
import Input from "./../../../components/Ul/input/input";
import classes from "./ContactData.module.css";
import { connect } from "react-redux";
import Auxiliary from "./../../../hoc/Auxiliary";
import axios from "./../../../axios";
import { withRouter } from "react-router-dom";
import Spinner from "./../../../components/Ul/Spinner/Spinner";
import CardOptionsEnvio from './../../../components/Ul/CardOptionsEnvio/CardOptionsEnvio';
import CardOptionsPagos from './../../../components/Ul/CardOptionPagos/CardOptionsPagos';
import * as actions from "./../../../store/actions/index";
import Modal from './../../../components/Ul/Modal/Modal';
import CurrencyFormat from 'react-currency-format';

import { format } from "date-fns";

class ContactData extends Component {
  _isMounted=false;
  state = {
    orderForm: {
      nombre: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Ingresa tu nombre y apellido",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Ingresá tu email",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      telefono: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Telefono",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      provincia: {
        elementType: "select",
        elementConfig: {
          option: [
            {
              value: "G.B.A (Gran Buenos Aires)",
              displayValue: "Gran Buenos Aires (G.B.A)",
            },
            {
              value: "Buenos Aires Interior",
              displayValue: "Buenos Aires Interior",
            },
            { value: "Catamarca", displayValue: "Catamarca" },
            { value: "C.A.B.A", displayValue: "C.A.B.A" },
            { value: "Chaco", displayValue: "Chaco" },
            { value: "Chubut", displayValue: "Chubut" },
            { value: "Cordoba", displayValue: "Cordoba" },
            { value: "Corrientes", displayValue: "Corrientes" },
            { value: "Entre Rios", displayValue: "Entre Rios" },
            { value: "Formosa", displayValue: "Formosa" },
            { value: "Jujuy", displayValue: "Jujuy" },
            { value: "La Pampa", displayValue: "La Pampa" },
            { value: "La Rioja", displayValue: "La Rioja" },
            { value: "Mendoza", displayValue: "Mendoza" },
            { value: "Misiones", displayValue: "Misiones" },
            { value: "Neuquen", displayValue: "Neuquen" },
            { value: "Rio Negro", displayValue: "Rio Negro" },
            { value: "Salta", displayValue: "Salta" },
            { value: "San Juan", displayValue: "San Juan" },
            { value: "San Luis", displayValue: "San Luis" },
            { value: "Santa Cruz", displayValue: "Santa Cruz" },
            { value: "Santa Fe", displayValue: "Santa Fe" },
            { value: "Sgo. del Estero", displayValue: "Sgo. del Estero" },
            { value: "Tierra del Fuego", displayValue: "Tierra del Fuego" },
            { value: "Tucuman", displayValue: "Tucuman" },
          ],
        },
        value: "G.B.A (Gran Buenos Aires)",
        validation: {
          required: true,
        },
        valid: true,
        touched: false,
      }
    },
    formIsValid: false,
    loading: false,
    submitingBeforeComplete: false,
    showPriceModal: false
  };

  shouldComponentUpdate(nextProps, nextState){
    if(
      this.props.formaDePago !== nextProps.formaDePago|| 
      this.props.formaDeEnvio !== nextProps.formaDeEnvio
      || this.state !== nextState){
      return true
    }else{
      return false
    }
  }

  componentDidMount(){
    this._isMounted=true;
  }

  showPriceModalHandler = (event)=>{
    event.preventDefault();
    this.setState({showPriceModal: !this.state.showPriceModal})
  }

  mercadoPago = (order) => {
    const freeShipping = ["C.A.B.A", "G.B.A (Gran Buenos Aires)"];
    var shippingCost   = order.formaDeEnvio === "A convenir" && !freeShipping.includes(order.orderData.provincia) ? 400 : 0;
    var orderItems=[];
    for(var i = 0;i<order.basket.length;i++){
      var item = {
        title: order.basket[i].modelo,
        unit_price: order.basket[i].precioParticular,
        quantity: order.basket[i].cantidad,
      };
      orderItems.push(item);
    }
    var postData = {
      items: [
        orderItems,
      ],
      name: order.orderData.nombre,
      email: order.orderData.email,
      number: order.orderData.telefono,
      shipments:{
        cost: shippingCost,
      },
      total_amount: order.price + shippingCost,
    };
    axios.post('https://nookserver.herokuapp.com/mercadopago/create', {
      headers: {
        Authorization: 'Access-Control-Allow-Headers, X-Requested-With, Content-Type',
      },
      data: postData,
      order: order,
    })
    .then(response => {
      return  window.location = response.data;
    })
    .catch((error) => console.log(error));
  }



 orderHandler = (event) => {
    this.setState({ loading: true });
    event.preventDefault();

    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }

    let date = new Date();
   let time = format(date, "dd/MM/yyyy HH:mm:ss");
    const order = {
      basket: this.props.basket,
      price: this.props.price,
      orderData: formData,
      formaDePago: this.props.formaDePago,
      formaDeEnvio: this.props.formaDeEnvio,
      pagado: false,
      entregado: false,
      date: time,
    };
    this.props.onCreateOrder(order)
    // this.discountHandler(formData.provincia)

    axios
    .post("/orders.json", order)
    .then(response =>{
    if(this._isMounted && order.formaDePago === 'Transferencia Bancaria'){
      axios.post('https://nookserver.herokuapp.com/emails/create', {
        "to": `${order.orderData.email}`,
        "subject": "Tu Compra en Nook",
        "html": '<h3 style="text-align: left"><b><i>Nook</i></b></h1><br><h3 style="text-align:left;margin-top:-20px"><b>MARIANA LACROZE</b></h3><br><p>Hola '+order.orderData.nombre+',</p><br><p><b>Detalle de compra:</b></p><span style="border: 1px solid #ccc; padding: 15px; width: 70vh; height: auto; background-color: white; display: block;"><p>Cantidad:'+order.basket[0].cantidad+'</p><p>Forma:'+order.basket[0].forma+'</p><p>Medidas: '+order.basket[0].medida.altura+'m. por '+order.basket[0].medida.altura+'m</p><p>Modelo:'+order.basket[0].modelo+'</p><p>Genero: '+order.basket[0].genero+'</p><p>Color: '+order.basket[0].color+'</p><p>Tacha: '+order.basket[0].tacha+'</p><p>Precio Individual: $'+order.basket[0].precioParticular+'</p></span><p><b>Monto Total (incluyendo descuentos)</b> = $'+order.price+'</p><p>Pronto nos estaremos comunicando con vos al '+order.orderData.telefono+'.</p><br><p>¡Muchas gracias por tu compra!</p><br><p>Saludos,</p><p>Equipo Nook</p>'
}).then(
  this.setState({ loading: false })
)
.then(this.props.history.push("/pagos"))
    }
    else{
      return this.mercadoPago(order);
    }
    })
    .catch((error) => console.log(error)); //this.props.onLoading());
  }

  checkValidity(value, rules){
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    return isValid;
  }

  inputChangeHandler(event, inputIdentifier){
    const updatedOrderForm = {
      ...this.state.orderForm,
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier],
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    
    updatedOrderForm[inputIdentifier] = updatedFormElement;

 if(inputIdentifier=== 'provincia'){
   this.props.onProvinciaSelected(updatedOrderForm[inputIdentifier].value)
 }
    
  

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };

  pagoHandler = (event) => {
    let formaDePago = event.target.value;
    this.props.onFormaDePagoSelected(formaDePago, this.props.basket);
  };

  envioHandler =(event) =>{
    let formaDeEnvio = event.target.value;
    this.props.onSelectFormaDeEnvio(formaDeEnvio)
  }

  submitingBeforeCompleteHandler = (event) =>{
    event.preventDefault();
    this.setState({submitingBeforeComplete: !this.state.submitingBeforeComplete})
  }

  componentWillUnmount(){
      this._isMounted=false;
  
  }

  

  render() {
    const arrayClasses = [classes.submitBtn, classes.disabled];
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    let form = (
      <form className={classes.ContactData} onSubmit={
        this.props.formaDeEnvio !== null &&
        this.props.formaDePago !== null &&
        this.props.basket.length !== 0 &&
        this.state.formIsValid ?
        this.showPriceModalHandler: this.submitingBeforeCompleteHandler
      }>
        {
         this.state.submitingBeforeComplete ? 
         <Modal 
         modalClosed={this.submitingBeforeCompleteHandler}
         show={this.state.submitingBeforeComplete}><p>Por favor, complete todos los datos requeridos antes de enviar el formulario</p></Modal> : null
        }
        <CardOptionsEnvio formaDeEnvio={this.props.formaDeEnvio} envioSelected={this.envioHandler}/>
        <h4 className={classes.datosContacto}>Datos de contacto</h4>
        {formElementsArray.map((formElement) => {
          return this.props.formaDeEnvio === "Retiro" && formElement.id === 'provincia' ?
            null :
            <React.Fragment key={formElement.id}>
              {
                this.props.formaDeEnvio === "A convenir" && formElement.id === 'provincia' ?
                <p className={classes.formInputEnvioMsj}>Elija la provincia de envio:</p> : null
              }
              <Input
             key={formElement.id}
             elementType={formElement.config.elementType}
             elementConfig={formElement.config.elementConfig}
             value={formElement.config.value}
             invalid={!formElement.config.valid}
             shouldValidate={formElement.config.validation}
             touched={formElement.config.touched}
             changed={(event) =>
               this.inputChangeHandler(event, formElement.id)
             }
           />
            </React.Fragment>
             
           
          
        })}
        {/* <div className={classes.MensajeDeFormaDePago}>
            <p>Los pagos se realizan mediante transferencia bancaria.</p>
            <p>Por otras opciones comunicarse al  <a
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{textDecoration: "none"}}
                        href="https://api.whatsapp.com/send?phone=+5491155623604o&text=%20">+54 911 5562 3604</a></p>
        </div> */}
        <CardOptionsPagos formaDePago={this.props.formaDePago} formaDePagoSelected={this.pagoHandler} />
        {this.props.formaDePago === "Transferencia Bancaria" ? 
        <p className={classes.discountMessage}>Se le aplicó un 20% de descuento.</p> : null}
        <button
          type="submit"
          className={
            this.props.formaDeEnvio !== null &&
            this.props.formaDePago !== null &&
            this.props.basket.length !== 0 &&
            this.state.formIsValid
              ? arrayClasses[0]
              : arrayClasses.join(" ")
          }
          disabled={
            this.props.formaDeEnvio === null &&
            this.props.formaDePago === null &&
            !this.state.formIsValid &&
            this.props.basket.length === 0
          }
        >
          Proceder al pago
        </button>
        <Modal show={this.state.showPriceModal} modalClosed={this.showPriceModalHandler}>
          <div className={classes.pagoMessage}>
        <div className={classes.envioMessage}>Forma de Envío: {this.props.formaDeEnvio}
        {
        this.state.orderForm.provincia.value !== 'G.B.A (Gran Buenos Aires)' || this.state.orderForm.provincia.value ===  "C.A.B.A" ?
        <span>+ $400</span> : null
       }
        {this.props.formaDeEnvio === "A convenir" ?
         <p>Provincia: {this.state.orderForm.provincia.value}</p>: null}
        
       </div>
       <div className={classes.formaDePagoMessage}>Forma de Pago: {this.props.formaDePago}
       {this.props.formaDePago === "Transferencia Bancaria" ? <span>- 20%</span> : null}
       </div>
       <CurrencyFormat 
                renderText={(value)=>{
                    return(
               <h3 className={classes.precioFinalMessage}>Precio Final: {value}</h3>
                        )
                }}
                decimalScale={2}
                value={this.props.price} //Homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                fixedDecimalScale={true}
            />
      
          </div>
          <button className={classes.ModalBtn} onClick={this.orderHandler}>
            Ir a Pagar
          </button>
        </Modal>
        <Modal show={this.state.loading}>
        <Spinner />;
        <p className={classes.CargandoText}>Aguarde un instante...</p>
        </Modal>
      </form>
    );

    return <Auxiliary>{form}</Auxiliary>;
  }
}

const mapStateToProps = (state) => {
  return {
    basket: state.carrito.basket,
    price: state.carrito.totalPrice,
    formaDePago: state.carrito.formaDePago,
    formaDeEnvio: state.carrito.formaDeEnvio
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateOrder: (order) => dispatch(actions.onCreateOrder(order)),
    onFormaDePagoSelected: (formaDePago, basket) =>
      dispatch(actions.onSelectFormaDePago(formaDePago, basket)),
    onSelectFormaDeEnvio: (formaDeEnvio)=>dispatch(actions.onSelectFormaDeEnvio(formaDeEnvio)),
    onProvinciaSelected: (provincia) => dispatch(actions.onProvinciaSelected(provincia))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withErrorHandler(ContactData, axios)));

//this.props.basket.length === 0 &&
