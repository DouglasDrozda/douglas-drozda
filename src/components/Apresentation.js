import React, { useEffect } from 'react';
import '../styles/Apresentation.css';
import me from '../images/me.png';
import download from '../images/download.png';
import animateScroll from '../functions/scrollReveal';


function Apresentation() {

 useEffect(() => {
  animateScroll()
 },[]);

  return (
    <section id="home" className="apresentation-container">
      <div className="apresentation-sub-container">
        <div className="apresentation">
          <p className="hello">Olá, eu sou</p>
          <h1 className="douglas">Douglas Drozda</h1>
          <h2 className="develop">Desenvolvedor Front-end</h2>
          <div className="contain-buttons">
            <button type="button" className="download">Download CV<img className="icon-download" src={download} alt="download" /></button>
            <a href="https://api.whatsapp.com/send?phone=13997715719" target="_blank">
              <button type="button" className="enter-contact">Entrar em contato</button>
            </a>
          </div>
        </div>
        <div className="img-me">
          <img src={me} alt="minha-foto" width="100%" />
        </div>
      </div>
    </section>
  );
}

export default Apresentation;
