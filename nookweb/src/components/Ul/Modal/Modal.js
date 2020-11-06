import React from 'react';

import classes from './Modal.module.css';

import Auxiliary from './../../../hoc/Auxiliary';
import Backdrop from './../Backdrop/Backdrop';

const modal = (props) => {
    
   let classesModal=[classes.Modal]

    if(props.show){
        classesModal.push(classes.openModal)
    }

    return(<Auxiliary>
        <Backdrop show={props.show} clicked={props.modalClosed}> 
    <div 
    className={classesModal.join(' ')} >
        {props.children}
    </div>
    </Backdrop>
    </Auxiliary>)}

 
export default modal;