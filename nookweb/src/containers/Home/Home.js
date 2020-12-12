import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import classes from './Home.module.css';
import NavigationItemsDesktop from './../../components/Navigation/NavigationItemsDesktop/NavigationItemDesktop';

class Home extends Component {
    state={
        showSubMenu: false
    }

    showSubMenuHandler=()=>{
        this.setState({showSubMenu: !this.state.showSubMenu})
    }
   
    render() { 

        let classesMenu=[classes.submenu]

        if(this.state.showMenu){
            classesMenu.push(classes.subMenuOpen)
        }

        return ( 
            <div className={classes.Home}>
            <nav className={classes.DesktopOnly}>
               <NavigationItemsDesktop showSubMenu={this.state.showSubMenu} showSubmenuHandler={this.showSubMenuHandler}/>
            </nav>
            <Link className={classes.respaldoBuilderLink} to="/respaldo-options/respaldo-builder">
                <div className={classes.container}>
                    <h3>Personaliza tu respaldo</h3>
                </div>
            </Link>
            <div className={classes.dataDePago}>
            <p>- Pagando con transferencia bancaria tenés 20% de descuento en el precio final</p>
            <p>- Ofrecemos cuotas y variedad de tarjetas</p>                
            </div>

            </div>
         );
    }
}
 
export default Home;