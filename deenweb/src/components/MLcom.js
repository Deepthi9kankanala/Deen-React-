import React from 'react'
import './MLcom.css';
function MLcom() {
    return (
        <>
          <header>
            <div className="header-content">
              <h2>Fueling the Machine Learning Revolution</h2>
              <div className="line"></div>
              <h1>The best way to predict the future is to implement it. </h1>
            </div>
          </header>
    
          <section className="events">
            <div className="title">
              <h1>Our segments</h1>
              <div className="line"></div>
            </div>
              <div className="row">
                <div className="col">
                  <img src="./images/ml1.jpg" alt="" />
                  <h4>Supervised Learning</h4>
                  <p>"Machine learning is like a really fancy Excel, but the magic is that you don't have to program the rules; you let the data tell you the rules</p>
                </div>
                <div className="col">
                  <img src="./images/ml2.jpg" alt="" />
                  <h4>Unsupervised Learning</h4>
                  <p>The more you engage with customers, the clearer things become and the easier it is to determine what you should be doing.</p>
                  <a href="#" className="ctn">Learn More</a>
                </div>
              </div>
          
          </section>
    
          <section className="explore">
            <div className="explore-content">
              <h1>OUR EXPERTISE</h1>
              <div className="line"></div>
              <p> We  offers managed services for every step of the machine learning lifecycle, fostering collaboration among data scientists, engineers, and developers.</p>
              </div></section>
    
          <section className="tours">
            <div className="row">
              <div className="col content-col">
                <h1>Success Stories</h1>
                <div className="line"></div>
                <p>Deen is recognised as customers choice among MachineLearning service providers </p>
              </div>
              <div className="col image-col">
                <div className="img-gallery">
                  <img src="./images/ml11.png" alt="" />
                  <img src="./images/ml22.png" alt="" />
                  <img src="./images/ml33.png" alt="" />
                  <img src="./images/ml44.png" alt="" />
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
    


export default MLcom
