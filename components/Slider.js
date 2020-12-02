import React, { useState } from 'react';
import '../css/slider.css';
import ImgComp from './ImgComp.js';
import i1 from '../images/img-1.jpg';
import i2 from '../images/img-2.jpg';
import i3 from '../images/img-3.jpg';
import i4 from '../images/img-4.jpg';
import i5 from '../images/img-5.jpg';

export default function Slider() {
  const [x,setX] = useState(0);
let sliderArr = [<ImgComp src={i1} slidetxt="EXPERIENCE HERITAGE" /> 
    , <ImgComp src={i2} slidetxt="EMBRACE ROYALTY"/> 
    , <ImgComp src={i3} slidetxt="MESMERIZING WILDLIFE"/> 
    , <ImgComp src={i4} slidetxt="DISCOVER SERENITY" /> 
    , <ImgComp src={i5} slidetxt="MYSURU DASARA"/>]; 
  const goLeft = () => {
   x === 0 ? setX(-100*(sliderArr.length-1)) : setX(x + 100);
  };
  const goRight = () => {
    x === ( -100*((sliderArr.length)-1)) ? setX(0) : setX(x - 100);
  };
  return (
    <div className='slider'>
      {
        sliderArr.map((item,index) => {
          return(
            <div key={index} className='slide' style={{transform: `translateX(${x}%)`}}>
              {item}
            </div>
          )
        })
      }
    <button id='goLeft' onClick= {goLeft}>
      <i class="fas fa-chevron-left"></i>
    </button>
    <button id='goRight' onClick= {goRight}>
      <i class="fas fa-chevron-right"></i>
    </button>
    </div>
  )
}




