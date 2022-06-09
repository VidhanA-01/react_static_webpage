import React from 'react';
import Image from "C:/Users/VIDHAN AGARWAL/react/new-start/src/images/reactjs-icon.jpg"
export default function Navbar(){
  return(
    <nav className="nav" >
      <img src={Image} alt="" />
      <h3 className='nav--logo_text'>ReactFacts</h3> 
      <h4 className='nav--title'>React Course - Project 1</h4>
    </nav>
  )
}