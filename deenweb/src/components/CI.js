// CardItem.js
import React from 'react';
import { Link } from 'react-router-dom';

function CI(props) {
  return (
    <>
      <li className='cii'>
        <Link className='cil' to={props.path}>
          <figure className='cip' data-category={props.label}>
           
            <video className='civ' src={props.src} alt='kkk Image'  autoPlay loop muted playsInline />
          </figure>
          <div className='cinfo'>
            <h5 className='cit'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CI;
