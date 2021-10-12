import React, { Component } from 'react';
import Croquis from '../../components/Respaldo/Respaldo/Croquis/Croquis';
import { Link } from 'react-router-dom';
import classes from './Home.module.css';
import Transfer from './transfer.png'
import QuienesSomos from '/home/juan/nookdeco/nookweb/src/components/QuienesSomos/QuienesSomos.js'
import NavigationItemsDesktop from './../../components/Navigation/NavigationItemsDesktop/NavigationItemDesktop';
import MpLogo from './MP.jpg'
import NookLogo from '/home/juan/nookdeco/nookweb/src/components/Ul/Logo/Logo.js'
import Contacto from '/home/juan/nookdeco/nookweb/src/components/Contacto/Contacto.js'


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
               {/* <NavigationItemsDesktop showSubMenu={this.state.showSubMenu} showSubmenuHandler={this.showSubMenuHandler}/> */}
            </nav>
            <div className={classes.landingView}>
               <div className={classes.col1}>
                    <h1>Personaliza tu respaldo y te lo fabricamos.</h1>
                    <Link className={classes.respaldoBuilderLink} to="/respaldo-options/respaldo-builder">
                        Comenzar
                    </Link>
                </div> 
                <div className={classes.col2}>
                    <div className={classes.croquisShape}>
                        <NookLogo />
                    </div>
                </div>
            </div>
                
            <div className={classes.dataDePago}>
                <div className={classes.payment}>
                    <img src={MpLogo} alt="mercadopago logo" />
                    <h3>Ofrecemos cuotas y variedad de tarjetas</h3>   
                </div>
                <div className={classes.paymentBank}>
                    <h3>Pagando con transferencia bancaria tenés 20% de descuento en el precio final</h3>
                    <img src={Transfer} alt="transfer by pc illustration" />
                </div>
            </div>
            <QuienesSomos />
            <Contacto />
            </div>
         );
    }
}
 
export default Home;