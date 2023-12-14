import React from 'react'
import './BPcom.css';

function BPcom() {
    return (
        <>
          <header>
            <div className="header-content">
              <h2>BUSINESS PROCESS </h2>
              <div className="line"></div>
              <h1>Creating digital dominance—Leveraging best of technology and expertise to manage your business operations </h1>
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
                  <h4>Supply Chain and Management</h4>
                  <p>Suppy chains complete , not companies</p>
                  <a href="#" className="ctn">Learn More</a>
                </div>
                <div className="col">
                  <img src="./images/ml2.jpg" alt="" />
                  <h4>Transforming Human resources</h4>
                  <p>High-performance HR operations  to support your workforce and grow your business</p>
                  <a href="#" className="ctn">Learn More</a>
                </div>
              </div>
          
          </section>
    
          <section className="explore">
            <div className="explore-content">
              <h1>24/7 Medical Information contact center</h1>
              <div className="line"></div>
              <p>Deen's Comprehensive approach helped a  lonh-time partner strengthen its MICCs through advanced technology .</p>
            </div>
          </section>
    
          <section className="tours">
            <div className="row">
              <div className="col content-col">
                <h1>OUR SEGMENTS</h1>
                <div className="line"></div>
                <p>The services are enabled through Wipro’s proprietary AI, ML and automation tools. We help clients with data of highest accuracy, enabling a faster go-to-market.</p>
              </div>
              <div className="col image-col">
                <div className="img-gallery">
                  <img src="./images/bp11.png" alt="" />
                  <img src="./images/bp22.jpg" alt="" />
                  <img src="./images/bp33.jpg" alt="" />
                  <img src="./images/bp44.jpg" alt="" />
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
    

export default BPcom
