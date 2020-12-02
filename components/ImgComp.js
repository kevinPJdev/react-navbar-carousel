import React from 'react';
import '../css/imgcomp.css';

function ImgComp({src,slidetxt}) {
  let imgStyles={
    width:100+"%",
    height:"auto",
  }
  return (
      <div>
        <img src={src} alt='slide-images' style={imgStyles} ></img>
        <div className='slide-header'>{slidetxt}</div>
      </div>
      
  )
};

export default ImgComp;
