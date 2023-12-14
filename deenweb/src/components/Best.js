// About.js
import React from 'react';
import './Best.css'; // Make sure to import the CSS file

function Best() {
    return (
        <div className='best'>
            <h1>Find Best Rated Services</h1>
            <div>
                <p><span className='bold'>All</span></p>
                <p>Artificial Intelligence</p>
                <p>Machine Learning</p>
                <p>Cybersecurity</p>
            </div>
            <div className='container'>
                <img src='C:/Users/dell/Desktop/Deen/deenweb/public/images/img-11.jpg' alt='' />
                <img src='C:/Users/dell/Desktop/Deen/deenweb/public/images/img-22.jpg' alt='' />
                <img src='C:/Users/dell/Desktop/Deen/deenweb/public/images/img-33.jpg' alt='' />
            </div>
            <button className='btn'>View All</button>
        </div>
        
    );
}

export default Best;
