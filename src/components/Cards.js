import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC CONNECTIVITY!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/H1.png'
              text='Explore the ways os smart Communication'
              label='SmartHospital'
              path='/services'
            />
            <CardItem
              src='images/o.png'
              text='Invlove into chat conversation.'
              label='Live-Chat'
              path='/feedback'
            />
            <CardItem
              src='images/screen-sharing.png'
              text='Chat along and share your content with others.'
              label='ContentShare'
              path='/support'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
