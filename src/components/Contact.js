import React from 'react';
import '../styles/Contact.css';
import telephone from '../images/telephone.png';
import placeholder from '../images/placeholder.png';
import message from '../images/message.png';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-container">
        <div className="contact-sub-container">
          <div className="contact-contain">
            <h2 className="contact-title">Contato</h2>
          </div>
          <div className="icons-contact-contain">
            <div className="whatsapp">
              <img className="icons" src={ telephone }  alt="icon-phone" width="36px" />
              <div className="info-whatsapp">
                <p>WhatsApp</p>
                <p>(13)99771-5719</p>
              </div>
            </div>
            <div className="whatsapp">
              <img className="icons" src={ placeholder }  alt="icon-phone" width="36px" />
              <div className="info-whatsapp">
                <p>Email</p>
                <p>lowdouglas9712@gmail.com</p>
              </div>
            </div>
            <div className="whatsapp">
              <img className="icons" src={ message }  alt="icon-phone" width="36px" />
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
