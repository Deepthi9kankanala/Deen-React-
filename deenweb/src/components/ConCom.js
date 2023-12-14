import React from 'react';
import './ConCom.css';

function ContactComponent() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2 className="contact-left-heading">Contact Us Here</h2>

        <form action="#">
        <div className="form-element">
            <input type="text" id="contact-name" className="form-input" />
            <label htmlFor="contact-name">Full Name</label>
          </div>

          <div className="form-element">
            <input type="text" id="contact-email" className="form-input" />
            <label htmlFor="contact-email">Email</label>
          </div>

          <div className="form-element">
            <textarea
              name=""
              id="contact-message"
              cols="30"
              rows="10"
              className="form-input"
            ></textarea>
            <label htmlFor="contact-message">Your Message</label>
          </div>

          <input type="submit" className="form-btn" value="Send" />
        </form>
      </div>

      <div className="contact-right">
        <h2>Or Here</h2>

        <p>
          <strong>Email:</strong>
        </p>
        <p>deen0708@gmail.com</p>
        <br />

        <p>
          <strong>Get Social:</strong>
        </p>
        <div className="social-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter-square"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
