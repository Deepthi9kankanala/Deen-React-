import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>INSITE BY INTREST !!!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-1.jpg'
              text='Innovating Tomorrow: Dive into the World of AI Excellence'
              label='Artificial Intelligence'
              path='/AI'
            />
            <CardItem
              src='/images/img-2.jpg'
              text='Revolutionizing Workflows: Where Innovation Meets Operational Excellence'
              label='Business Process'
              path='/Businessprocess'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-3.jpg'
              text='Tomorrows Technology, Todays Success: Thrive with Cloud Innovation'
              label='Cloud'
              path='/Cloud'
            />
            <CardItem
              src='/images/img-4.jpg'
              text='Lock, Block, and Secure: Mastering the Art of Cybersecurity.'
              label='Cybersecurity'
              path='/Cybersecurity'
            />
            <CardItem
              src='/images/img-8.jpg'
              text='In the Era of Smart Machines.'
              label='MachineLearning'
              path='/Machinelearning '
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;