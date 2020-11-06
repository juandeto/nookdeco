import React from 'react';

import classes from './ArrowLeft.module.css' 

const arrowLeft = (props)=> {

   return( 
     <div 
     onClick={() => props.goToLeft(props.pathname)}
     className={classes.ArrowLeft}>
       <span>Paso anterior</span>
   <svg
    
    
      viewBox="0 0 37 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M34 72L4 35.2L31.8261 2" stroke="#404145" strokeWidth="6" />
    </svg>
    </div>
    )
  };

  export default arrowLeft;