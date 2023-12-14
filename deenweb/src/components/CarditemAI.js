import React from 'react';
import { Link } from 'react-router-dom';

function CardItemAI(props) {
  return (
    <>
      <li className='cards__item_AI'>
        <Link className='cards__item__link_AI' to={props.path}>
          <figure className='cards__item__pic-wrap_AI' data-category={props.label}>
            <img
              className='cards__item__img_AI'
              alt=" "
              src={props.src}
            />
          </figure>
          <div className='cards__item__info_AI'>
            <h5 className='cards__item__text_AI'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItemAI;