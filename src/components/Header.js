import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
        <div className="header-sub-container">
          <h1 className="name">Douglas Drozda</h1>
          <nav className="header-options">
            <p className="options">Home</p>
            <p className="options">Sobre</p>
            <p className="options">Projetos</p>
            <p className="options">Contato</p>
            <a href="https://www.instagram.com/doouglasdrozda/" target="_blank">
              <FaInstagram className="logos-sociais" />
            </a>
            <a href="https://www.linkedin.com/in/douglasdrozda/" target="_blank">
              <FaLinkedin className="logos-sociais" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=13997715719" target="_blank">
              <FaWhatsapp className="logos-sociais" />
            </a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
