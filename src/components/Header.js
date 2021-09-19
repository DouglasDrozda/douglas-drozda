import React from 'react';
import '../styles/Header.css';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import whatsapp from '../images/whatsapp.png';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-sub-container">
          <h1 className="name">Douglas Drozda</h1>
          <div className="header-options">
            <p className="options">Home</p>
            <p className="options">Sobre</p>
            <p className="options">Projetos</p>
            <p className="options">Contato</p>
            <a href="https://www.instagram.com/doouglasdrozda/" target="_blank">
              <img className="logos-sociais" src={ instagram } alt="logo-instagram" />
            </a>
            <a href="https://www.linkedin.com/in/douglasdrozda/" target="_blank">
              <img className="logos-sociais" src={ linkedin } alt="logo-linkedin" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=13997715719" target="_blank">
              <img className="logos-sociais" src={ whatsapp } alt="logo-whatsapp" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
