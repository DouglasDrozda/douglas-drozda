import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logoDoug from '../images/logoDoug.png';
import '../styles/Header.css';
import { Anchor } from 'antd';

const { Link } = Anchor;

class Header extends React.Component {

  render() {
    return (
      <header className="header-container">
        <div className="header-sub-container">
          <img src={logoDoug} alt="logo-doug" width="250px" />
          <nav className="header-options">
            <Anchor targetOffset="65">
              <Link href="#home" title="Home" />
              <Link href="#about" title="Sobre" />
              <Link href="#project" title="Projetos" />
              <Link href="#contact" title="Contato" />
            </Anchor>
            <a href="https://www.instagram.com/doouglasdrozda/" rel="noreferrer" target="_blank">
              <FaInstagram className="logos-sociais" />
            </a>
            <a href="https://www.linkedin.com/in/douglasdrozda/" rel="noreferrer" target="_blank">
              <FaLinkedin className="logos-sociais" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=13997715719" rel="noreferrer" target="_blank">
              <FaWhatsapp className="logos-sociais" />
            </a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
