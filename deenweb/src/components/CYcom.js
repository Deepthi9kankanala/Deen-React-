import React from 'react'
import './CYcom.css';
function CYcom() {
    return (
        <>
          <header>
            <div className="header-content">
              <h2>Deen CYBERSECURITY</h2>
              <div className="line"></div>
              <h1>Wipro strengthens its leadership in Strategic Cybersecurity Services with this acquisition by Cybersecurists. </h1>
            </div>
          </header>
    
          <section className="events">
            <div className="title">
              <h1>What we doo</h1>
              <div className="line"></div>
            </div>
              <div className="row">
                <div className="col">
                  <img src="./images/cy1.png" alt="" />
                  <h4>face down threats</h4>
                  <p>Prioritize prevention. Face down threats. Combat cyber attacks.</p></div>
                <div className="col">
                  <img src="./images/cy2.png" alt="" />
                  <h4>X-Ray vision</h4>
                  <p>See inside your entire ecosystem to identify threats and assess vulnerabilities.</p>
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
                  <img src="./images/cy11.png" alt="" />
                  <img src="./images/cy22.png" alt="" />
                  <img src="./images/cy33.png" alt="" />
                  <img src="./images/cy44.png" alt="" />
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
    
export default CYcom
