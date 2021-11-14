import React from 'react';
import Box from './product-box/Box';
import img1 from '../img/organic-pro-1.jpg'
import img2 from '../img/organic-pro-2.jpg'
import img3 from '../img/organic-pro-3.jpg'
import img4 from '../img/organic-pro-4.jpg'
import img5 from '../img/organic-pro-5.jpg'
import img6 from '../img/organic-pro-6.jpg'

function Product() {
   return (
      <div className='product'>
         <div className="p-heading">
            <h3>New Organic Product</h3>
         </div>
         <div className="product-container">
            <Box image={img1} name='water-melon' price='23$' />
            <Box image={img2} name='banana' price='22$' />
            <Box image={img3} name='water-melon' price='21$' />
            <Box image={img4} name='water-melon' price='20$' />
            <Box image={img5} name='water-melon' price='25$' />
            <Box image={img6} name='water-melon' price='28$' />

         </div>

      </div>
   )
}

export default Product
