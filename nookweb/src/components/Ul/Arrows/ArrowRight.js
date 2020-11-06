import React from 'react';

import classes from './ArrowRight.module.css' 

const arrowRight =(props) => {
    

   return( 
   <div  
   onClick={() => props.goToRight(props.pathname)}
   className={classes.ArrowRight}>
  <span>Siguiente paso</span>
   <svg
    
   
      viewBox="0 0 37 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 2L33 38.8L5.17391 72" stroke="#404145" strokeWidth="6" />
    </svg>
    </div>)
  };

  export default arrowRight;