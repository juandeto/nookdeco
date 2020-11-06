import React from 'react';

import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Header.module.css'
import CarritoLink from './../CarritoLink/CarritoLink';
import MediaLinks from './../MediaLinks/MediaLinks';
import MenuBtn from './../../Navigation/MenuBtn/MenuBtn';

function Header(props) {

    return (
        <div className={classes.Header}>
            <MenuBtn openSideDrawer={props.openSideDrawer}/>
            <span className={classes.LinksContainer}><MediaLinks /></span>
            {props.token ? <Link to="/admin-user"><h3>MODO-ADMIN</h3></Link>: null}
            
            <Link to="/" ><h3>Nook</h3></Link>
            <CarritoLink />
        </div>
    )
}

const mapStateToProps=state =>{
    return{
        token: state.auth.token !== null
    }
}

export default connect(mapStateToProps, null)(withRouter(Header))
