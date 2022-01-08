import React, { useEffect } from 'react';
import '../styles/Apresentation.css';
import hello from '../images/hello.svg';
import download from '../images/download.png';
import animateScroll from '../functions/scrollReveal';
import curriculoDouglasDrozda from '../images/curriculoDouglasDrozda.pdf';

function Apresentation() {

  useEffect(() => {
    animateScroll()
  }, []);

  return (
    <section id="home" className="apresentation-container">
      <div className="apresentation-sub-container">
        <div className="apresentation">
          <p className="hello">Olá, eu sou</p>
          <h1 className="douglas">Douglas Drozda</h1>
          <h2 className="develop">Desenvolvedor Front-end</h2>
          <div className="contain-buttons">
            <a href={curriculoDouglasDrozda} download className="download" rel="noreferrer">DOWNLOAD CV<img className="icon-download" src={download} alt="download" /></a>
            <a href="https://api.whatsapp.com/send?phone=13997715719" target="_blank" rel="noreferrer" className="enter-contact">
              ENTRAR EM CONTATO
            </a>
          </div>
        </div>
        <div className="img-me">
          <img src={hello} alt="minha-foto" width="100%" />
        </div>
      </div>
    </section>
  );
}

export default Apresentation;
