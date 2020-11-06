import React, { Component } from 'react';
import Header from './../Ul/Header/Header';
import SideDrawer from './../Navigation/SideDrawer/SideDrawer.js';
import classes from './Layout.module.css'

class Layout extends Component {
    state = {
        showSideDrawer: false,
        showSubMenu: false
    }
    

        sideDrawerCloseHandler = () =>{
            this.setState({showSideDrawer: false});
        }
    
        sideDrawerOpenHandler = () =>{
            this.setState({showSideDrawer: true});
        }

        subMenuHandler = () =>{
            this.setState({showSubMenu: !this.state.showSubMenu});
        }
        render(){

        return (
        <div className={classes.Layout}>
            <Header 
            openSideDrawer={this.sideDrawerOpenHandler}
            />
            <SideDrawer 
            showSubmenuFunction={this.subMenuHandler}
            showSubMenu={this.state.showSubMenu}
       open={this.state.showSideDrawer} 
       closed={this.sideDrawerCloseHandler}/>
            <main className={classes.main}>
                {this.props.children}
            </main>
        </div>
    )
    }
    
}

export default Layout;
