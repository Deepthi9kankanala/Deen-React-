import React from 'react';
import './AIcom.css';


function AIcom() {
    return (
        <>
          <header>
            <div className="header-content">
              <h2>Fueling the AI-Driven Innovation </h2>
              <div className="line"></div>
              <h1>Deen ai360 , an end to end ecosystem </h1>
            </div>
          </header>
    
          <section className="events">
            <div className="title">
              <h1>Deen ai360</h1>
              <div className="line"></div>
            </div>
              <div className="row">
                <div className="col">
                  <img src="./images/ai1.jpg" alt="" />
                  <h4>Generative AI</h4>
                  <p>Generative AI has witnessed remarkable advancements in the recent years, giving rise to a thriving ecosystem that harnesses its potential for businesses. </p>
                  <a href="#" className="ctn">Learn More</a>
                </div>
                <div className="col">
                  <img src="./images/ai2.jpg" alt="" />
                  <h4>Inspect AI</h4>
                  <p>InspectAI transforms inspection workflows by combining process, technology, and business model elements to deliver an enhanced inspection management service.</p>
                  <a href="#" className="ctn">Learn More</a>
                </div>
              </div>
          
          </section>
    
          <section className="explore">
            <div className="explore-content">
              <h1>Deen ai360</h1>
              <div className="line"></div>
              <p>Deen ai360 is helping enterprises capitalize on the true value of AI. With AI infused into every part of the ecosystem, we serve as a true orchestrator, helping enterprises soar into the future.</p>
            </div>
          </section>
    
          <section className="tours">
            <div className="row">
              <div className="col content-col">
                <h1>News & Events</h1>
                <div className="line"></div>
                <p>The award reinforces Deen’s leadership in AI and automation.Join us for an evening devoted to exploring the untapped potential of generative AI.</p>
              </div>
              <div className="col image-col">
                <div className="img-gallery">
                  <img src="./images/ai11.jpg" alt="" />
                  <img src="./images/ai22.jpg" alt="" />
                  <img src="./images/ai33.jpg" alt="" />
                  <img src="./images/ai44.jpg" alt="" />
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
    

export default AIcom
