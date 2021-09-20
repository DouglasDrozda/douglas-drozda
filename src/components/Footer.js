import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../styles/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-container">
        <div className="footer-sub-container">
          <div className="icons-container">
            <a href="https://www.instagram.com/doouglasdrozda/" target="_blank">
              <FaInstagram className="icons-sociais" />
            </a>
            <a href="https://www.linkedin.com/in/douglasdrozda/" target="_blank">
              <FaLinkedin className="icons-sociais" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=13997715719" target="_blank">
              <FaWhatsapp className="icons-sociais" />
            </a>
          </div>
          <div className="options-container">
            <p>Sobre</p>
            <span>|</span>
            <p>Projetos</p>
            <span>|</span>
            <p>Contato</p>
          </div>
          <div className="copyright">
            <p>© Copyright Douglas Drozda | 2021</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer