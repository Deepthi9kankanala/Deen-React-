import React from 'react';
import ConCom from './ConCom'; // Import your ContactComponent
import './BackgroundVideoComponent.css'; // Import the styles for the background video

function BackgroundVideoComponent() {
  return (
    <div className="background-video-container">
      
      <video autoPlay loop muted className="background-video">
        <source src="./videos/Conback.mp4" type="video/mp4" />
        
      </video>

      <ConCom />
    </div>
  );
}

export default BackgroundVideoComponent;
