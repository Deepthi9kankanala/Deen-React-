import React from 'react';
import './CardAI.css';
import CarditemAI from './CarditemAI';

function Cardss() {
  return (
    <div className='cardss'>
      <h1>INSITE BY INTREST !!!!</h1>
      <div className='cards__container_AI'>
        <div className='cards__wrapper__AI'>
          <ul className='cards__items__AI'>
            <CarditemAI
              src='/images/img-1.jpg'
              text='Innovating Tomorrow: Dive into the World of AI Excellence'
             
            />
            <CarditemAI
              src='/images/img-2.jpg'
              text='Revolutionizing Workflows: Where Innovation Meets Operational Excellence'
              

            />
            <CarditemAI
              src='/images/img-33.jpg'
              text='Revolutionizing Workflows: Where Innovation Meets Operational Excellence'
             

            />

          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cardss;