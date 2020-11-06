import React, { useEffect } from 'react';

import * as actions from "./../../store/actions/index";
import { connect } from 'react-redux';
import classes from './message.module.css';
import { Link } from 'react-router-dom';

function Message(props) {
    useEffect(() => {
        return () => props.onRefreshRespaldoProperties()
    }, [props])
    
    return (
        <div className={classes.Message}>
            <p>¡El producto ya fue agregado a tu carrito!</p>
            <Link to="/"><button className={classes.seguirComprandoBtn}>Seguir comprando</button></Link>
            <Link to="carrito"><button className={classes.irAlCarritoBtn}>Ir al carrito</button></Link>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      onRefreshRespaldoProperties: ()=>dispatch(actions.onRefreshRespaldoProperties())
    }
}

export default connect(null, mapDispatchToProps)(Message);
