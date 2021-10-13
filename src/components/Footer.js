import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../styles/Footer.css';
import { Anchor } from 'antd';

const { Link } = Anchor;

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-container">
        <div className="footer-sub-container">
          <div className="icons-container">
            <a href="https://www.instagram.com/doouglasdrozda/" rel="noreferrer" target="_blank">
              <FaInstagram className="icons-sociais" />
            </a>
            <a href="https://www.linkedin.com/in/douglasdrozda/" rel="noreferrer" target="_blank">
              <FaLinkedin className="icons-sociais" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=13997715719" rel="noreferrer" target="_blank">
              <FaWhatsapp className="icons-sociais" />
            </a>
          </div>
          <div className="options-container">
            <Anchor targetOffset="65">
              <Link className="footer-sobre" href="#about" title="Sobre" />
              <span>|</span>
              <Link className="footer-sobre" href="#project" title="Projetos" />
              <span>|</span>
              <Link className="footer-sobre" href="#contact" title="Contato" />
            </Anchor>
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