import React, { Component } from "react";

import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';
import classes from "./AdminLayout.module.css";
import { connect } from "react-redux";
import axios from "axios";
import Spinner from "./../../components/Ul/Spinner/Spinner";
import ItemOrder from './../../components/Admin/ItemOrder/ItemOrder';

class AdminLayout extends Component {
  state = {
    orders: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    //obtenemos las ordenes
    axios
      .get(
        "https://nookweb-5fb61.firebaseio.com/orders.json?auth=" +
          this.props.token
      )
      .then((response) => {
        let data;
        let arrayOrders = [...this.state.orders];
        for (data in response.data) {
          let obj = response.data[data];
          obj.id=data
          arrayOrders.push(obj);
        }

        //epujamos las ordenes al estado con un id
        this.setState({ orders: arrayOrders });
        this.setState({ loading: false });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  checkout=() =>{
    return this.props.history.push("logout")
  }

  orderPagoHandler = (id) => {
    let arrayOrders = [...this.state.orders];
    let index = arrayOrders.findIndex(order => order.id === id);
    arrayOrders[index].pagado = !this.state.orders[index].pagado;

    this.setState({orders: arrayOrders})
    let url=`https://nookweb-5fb61.firebaseio.com/orders/${ arrayOrders[index].id}.json`;
    axios.put(url, arrayOrders[index])
    .then(response => '')
    .catch(error => error)

  }

  formaDeEnvioHandler = (id) =>{
    let arrayOrders = [...this.state.orders];
    let index = arrayOrders.findIndex(order => order.id === id);
    arrayOrders[index].entregado = !this.state.orders[index].entregado; 
    this.setState({orders: arrayOrders})
    let url=`https://nookweb-5fb61.firebaseio.com/orders/${arrayOrders[index].id}.json`;
    axios.put(url, arrayOrders[index])
    .then(response => '')
    .catch(error => error)
  }

  deleteOrderHandler = (order) =>{
    let arrayOrders = [...this.state.orders];
    arrayOrders=arrayOrders.filter(orden => orden.id !== order.id);

    this.setState({orders: arrayOrders})

    let url=`https://nookweb-5fb61.firebaseio.com/orders/${order.id}.json`;
    axios.delete(url, order)
    .then(response => response)
    .catch(error => console.log(error))
  }

  

  render() {
    let orders = this.state.orders.map((order, i) => {
      let item=null;
        if(!order.pagado && !order.entregado){
         item=<ItemOrder 
          key={i}
          order={order} 
          orderPagoHandler={this.orderPagoHandler}
          formaDeEnvioHandler={this.formaDeEnvioHandler}
          deleteOrderHandler={this.deleteOrderHandler}
          saveChanges={this.saveChanges} />
          
        }
        return item;
    });
    let payOrders = this.state.orders.map((order, i) => {
      let item=null
      if(order.pagado && !order.entregado){
       
        item=<ItemOrder 
        key={i}
        order={order} 
        orderPagoHandler={this.orderPagoHandler}
        formaDeEnvioHandler={this.formaDeEnvioHandler}
        deleteOrderHandler={this.deleteOrderHandler}
        />
        
      }
      return item

  });

  let deliverOrders = this.state.orders.map((order, i) => {
    let item=null
    if(!order.pagado && order.entregado){
     
      item=<ItemOrder 
      key={i}
      order={order} 
      orderPagoHandler={this.orderPagoHandler}
      formaDeEnvioHandler={this.formaDeEnvioHandler}
      deleteOrderHandler={this.deleteOrderHandler}
      saveChanges={this.saveChanges} />
      
    }
    return item

});

  let completeOrders = this.state.orders.map((order, i) => {
    let item=null
    if(order.pagado && order.entregado){
      item= <ItemOrder 
      key={i}
      order={order} 
      orderPagoHandler={this.orderPagoHandler}
      formaDeEnvioHandler={this.formaDeEnvioHandler}
      deleteOrderHandler={this.deleteOrderHandler}
      saveChanges={this.saveChanges} />
      
    }
  return item
});

    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <div className={classes.AdminLayout}>
        <h2 className={classes.title}>Admin</h2>
        <div className={classes.btns}>
        {this.props.token ? (
            <button onClick={this.checkout} className={classes.logoutBtn}>Logout</button>
        ) : null}
        </div>
        <h3>Total Ordenes: {this.state.orders.length}</h3>
        <div className={classes.orderContainer}>{orders}</div>
        <h3>Ordenes Pagadas (y no entregadas) </h3>
        <div className={classes.pagadosContainer}>{payOrders}</div> 
        <h3>Ordenes Entregadas (y no pagadas) </h3>
        <div className={classes.pagadosContainer}>{deliverOrders}</div> 
        <h3>Ordenes Pagadas y Entregadas </h3>
         <div className={classes.completeOrdersContainer}>{completeOrders}</div> 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, null)(withErrorHandler(AdminLayout, axios));
