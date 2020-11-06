import React, {useState} from "react";
import "./slider.css";

const Slider = () => {
  const tachaSelect = (tamanio, precio, tipo)=>{
    if(tipo.length > 0){ 
      //pongo un condicional para que si clickeas "sin tachas" no se despache esa accion que cambia el displayTachaOptions a true
       this.props.onClickOnTacha()
    }
   
    this.props.onTachaSelected(tamanio, precio)
  }

  const tipoDeTachaSelect=(tipo) =>{
    this.props.onTipoDeTachaSelected(tipo)
  }

  let sliderArr = [ 
1,2,3,4,5
  ];
  const [x, setX]=useState(0)

  const goLeft = () =>{
    console.log(x);
    x=== 0 ? setX(-100*(sliderArr.length-1)) : setX(x + 100)
  }

  const goRight = () =>{
      
    x=== -100*(sliderArr.length-1) ? setX(0) : setX(x-100)
}
  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div key={index} 
          className="slide"
          style={{transform: `translateX(${x}%)`}}>
            {item}
          </div>
        );
      })}
      <button className="btn-styles" id="goLeft" onClick={goLeft}>
        left
      </button>
      <button className="btn-styles" id="goRight" onClick={goRight}>
        right
      </button>
    </div>
  );
};

export default Slider;
