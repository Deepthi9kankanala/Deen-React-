import React from 'react';
import './C.css';
import CI from './CI';

function C() {
  return (
    <div className='c'>
      <h1>Explore for feautures !!!!</h1>
      <div className='cc'>
        <div className='cw'>
          <ul className='csi'>
            <CI
              src='/videos/video-al.mp4'
              text='Fueling the Next Wave of AI -Driven innovation '
             
              path='/AI'
            />
            <CI
              src='/videos/video-b.mp4'
              text='Business solutions for tommorrow built on technology'
              
              path='/Businessprocess'
            />
          </ul>
          <ul className='csi'>
            <CI
              src='/videos/video-cl.mp4'
              text='Navigating the cloud native Maze'
              
              path='/Cloud'
            />
            <CI
              src='/Videos/video-c.mp4'
              text='Cyber transform enable Business growth'
           
              path='/Cybersecurity'
            />
            <CI
              src='/videos/video-ml.mp4'
              text='In the Era of Smart Machines.'
              
              path='/Machinelearning '
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default C;