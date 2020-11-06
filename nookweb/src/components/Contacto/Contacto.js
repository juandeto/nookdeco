import React, { Component } from 'react';

import MediaLinks from './../Ul/MediaLinks/MediaLinks';
import classes from './Contacto.module.css';

class Contacto extends Component{
    state={

    }


    render(){

        return ( 
            <div className={classes.Contacto}>
                <div className={classes.container}>
                <h1 className={classes.title}>Contacto</h1>

                    <div className={classes.info}>
                    <span>
                        Email:
                    </span>
                    <span>
                        marlacroze@yahoo.com
                    </span>
                    </div>
                    <div className={classes.info}>
                    <span>
                        WhatsApp:
                    </span>
                    <span>
                        <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://api.whatsapp.com/send?phone=+5491155623604o&text=%20">+54 911 5562 3604</a>
                    </span>
                    </div>

                </div>
                <div className={classes.LinksContainer}>
                    <p>¡Buscanos en las redes!</p>
                    <MediaLinks />
                </div>
            </div>
         );
    }
        
    
}
 
export default Contacto;


