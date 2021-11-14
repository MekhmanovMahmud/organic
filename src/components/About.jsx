import React from 'react'
import Aboutimage from '../img/organic-about-1.png'

function About() {
   return (
      <div className='about'>
         <div className="about-img">
            <img src={Aboutimage} alt="" />
         </div>

         <div className="about-text">
            <h3>Fresh Food, Simply<font>Delicious</font></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ullam accusamus modi quis aspernatur maiores sit sapiente praesentium laboriosam eum recusandae, veniam exercitationem ipsam corporis quod illum natus repudiandae cum?</p>
            <a className='about-btn' href="#">Read more</a>
         </div>

      </div>
   )
}

export default About
