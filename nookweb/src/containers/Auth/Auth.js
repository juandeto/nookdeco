import React, { Component } from 'react';

import classes from './Auth.module.css';
import { connect } from 'react-redux';
import * as actions from './../../store/actions/index';
import { withRouter } from 'react-router-dom';
import Spinner from './../../components/Ul/Spinner/Spinner';

class Auth extends Component {
    state={
        user: null,
        pass: null,
        isSignup: true
    }

    submitHandler(event){
        event.preventDefault();
        
        this.props.onAuth(this.state.user, this.state.pass)
        
        this.props.history.push('/');
            
       
        
        

    }

   

    userEmail(event){
        let email =event.target.value;

        this.setState({user: email})
    }

    userPass(event){
        let pass=event.target.value;
        this.setState({pass: pass})
    }

    render() { 
        let form=(
                <form onSubmit={this.submitHandler.bind(this)}>
                <label>
                    <p>User email</p>
                    <input required type="email" onChange={(event)=>this.userEmail(event)} placeholder="ingresa tu email"/>
                </label>
                <label>
                    <p>Password</p>
                    <input required type="password" onChange={(event)=>this.userPass(event)} placeholder="ingresa password"/>
                </label>
                <button type="submit">Login</button>
                </form>
        );

        if(this.props.loading || this.props.token){
            form= <Spinner />
        }

        let errorMessage = null;

        if(this.props.error){
         errorMessage=<p>{this.props.error.message}</p>
        }

        return ( 
            <div className={classes.Auth}>
                
                <h3>Nook Admin</h3>
               {form}
               {errorMessage}
            </div>
         );
    }
}

const mapStateToProps = state => {
    return{
        loading: state.auth.loading,
        error: state.auth.error,
        token: state.auth.token !==null,
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onAuth: (email, password)=>dispatch(actions.auth(email, password))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Auth));