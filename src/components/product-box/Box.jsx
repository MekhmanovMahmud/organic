import React from 'react';

function Box(props) {
   return (
      <div className='p-box'>
         <img src={props.image} alt="product-image" />
         <p>{props.name}</p>
         <a href="#" className='price' >{props.price}</a>
         <a href="#" className='buy-btn'>Add To Card</a>

      </div>
   )
}

export default Box;

