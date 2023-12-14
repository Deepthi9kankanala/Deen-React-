import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';



function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="./videos/video-2.mp4" autoPlay loop muted playsInline/>
        <h1 style={{color :'violet'}}>Where Ideas Ignite</h1>
      <p style={{ color: 'violet' }}>Ready to ignite your ideas?</p>
        <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>Enter the World of  Excellence</Button>
        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>Preview the Innovation <i className='far fa-play-circle'/></Button>
         
         
        </div>
        
    </div>
  )
}

export default HeroSection;