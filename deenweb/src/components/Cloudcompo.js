import React from 'react'
import './Cloudcompo.css';
function cloudcom() {
    return (
        <>
          <header>
            <div className="header-content">
              <h2>CLOUD COMPUTING </h2>
              <div className="line"></div>
              <h1>Navigating the cloud-native maze </h1>
            </div>
          </header>
    
          <section className="events">
            <div className="title">
              <h1>WHAT WE DOOO</h1>
              <div className="line"></div>
            </div>
              <div className="row">
                <div className="col">
                  <img src="./images/ml1.jpg" alt="" />
                  <h4>Cloud Leaders</h4>
                  <p>The strategic partner of choice for leading cloud services providers.</p>
                  <a href="#" className="ctn">Learn More</a>
                </div>
                <div className="col">
                  <img src="./images/ml2.jpg" alt="" />
                  <h4>Lead Analysts</h4>
                  <p>Cloud innovation with automation to impact business outcomes.</p>
                  <a href="#" className="ctn">Learn More</a>
                </div>
              </div>
          
          </section>
    
          <section className="explore">
            <div className="explore-content">
              <h1>MAKING INDUSTRY CLOUD POSSIBLE</h1>
              <div className="line"></div>
              <p>Our AI-driven solution, iShelf Insights, enables brands to deliver reliable customer experiences. It provides an effective way to monitor store shelves in real-time. </p>
            </div>
          </section>
    
          <section className="tours">
            <div className="row">
              <div className="col content-col">
                <h1>OUR SEGMENTS</h1>
                <div className="line"></div>
                <p>Get a better understanding of how organizations capture business value from their cloud investments.</p>
              </div>
              <div className="col image-col">
                <div className="img-gallery">
                  <img src="./images/cl11.png" alt="" />
                  <img src="./images/cl22.png" alt="" />
                  <img src="./images/cl33.png" alt="" />
                  <img src="./images/cl44.jpg" alt="" />
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
    
export default cloudcom
