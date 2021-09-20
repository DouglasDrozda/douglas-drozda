import React from 'react';
import '../styles/Apresentation.css';
import me from '../images/me.png';
import download from '../images/download.png';


class Apresentation extends React.Component {
  render() {
    return (
      <section className="apresentation-container">
        <div className="apresentation-sub-container">
          <div className="apresentation">
            <p className="hello">Olá, eu sou</p>
            <h1 className="douglas">Douglas Drozda</h1>
            <h2 className="develop">Desenvolvedor Front-end</h2>
            <div className="contain-buttons">
              <button type="button" className="download">Download CV<img className="icon-download" src={download} alt="download" /></button>
              <a className="enter-contact" href="https://api.whatsapp.com/send?phone=13997715719" target="_blank">
                <p>Entrar em contato</p>
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
}

export default Apresentation;
