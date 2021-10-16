import React from 'react';
import './detailspicture.css'

function Detailspicture({item, backPicSwitch}) {
  console.log(item)
  return (
    
      <div
        className="detailspicture"
        style={{ backgroundImage: `url(${item})` }} 
        onClick={()=>backPicSwitch(item)}
      >
      </div> 
  
  );
}

export default Detailspicture;