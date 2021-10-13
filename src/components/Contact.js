import React from 'react';
import '../styles/Contact.css';
import telephone from '../images/telephone.png';
import placeholder from '../images/placeholder.png';
import message from '../images/message.png';

class Contact extends React.Component {
  render() {
    return (
      <div id="contact" className="contact-container">
        <div className="contact-sub-container">
          <div className="contact-contain">
            <h2 className="contact-title">Contato</h2>
          </div>
          <div className="icons-contact-contain">
            <div className="whatsapp">
              <img className="icons" src={telephone} alt="icon-phone" />
              <div className="info-whatsapp">
                <a href="https://api.whatsapp.com/send?phone=13997715719" rel="noreferrer" target="_blank">
                  <p>WhatsApp</p>
                  <p>(13)99771-5719</p>
                </a>
              </div>
            </div>
            <div className="whatsapp">
              <img className="icons" src={message} alt="icon-phone" />
              <div className="info-whatsapp">
                <a href="mailto:lowdouglas9712@gmail.com?subject=Preciso%20falar%20com%20você">
                  <p>Email</p>
                  <p>lowdouglas9712@gmail.com</p>
                </ a>
              </div>
            </div>
            <div className="whatsapp">
              <img className="icons" src={placeholder} alt="icon-phone" />
              <div className="info-whatsapp">
                <p>Localização</p>
                <p>São Paulo - Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
