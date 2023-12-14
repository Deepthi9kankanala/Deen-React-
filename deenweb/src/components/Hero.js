import React from 'react';
import '../App.css';
import "./Hero.css";
import { Button } from './Button';

function Hero() {
  return (<>
    <div className='hero-container'>
        <video src="./videos/video-22.mp4" autoPlay loop muted playsInline/>
        
      <p style={{ color: 'white' }}>Where Technology Meets Excellence- Our IT Services.</p>
        <div className="hero-btns">
        
        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>Explore services <i className='far fa-play-circle'/></Button>
         
         
        </div>
        
    </div>
   
    </>
  )
}

export default Hero