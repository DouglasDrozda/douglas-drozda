import React from 'react';
import '../styles/About.css';
import myphoto from '../images/myphoto.png';

class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-sub-container">
          <div className="about-tilte-contain">
            <h2 className="about">Sobre</h2>
          </div>
          <div className="description-contain">
            <img src={myphoto} alt="my-photo" width="300px" />
            <div>
              <p className="description-doug">Douglas Drozda</p>
              <p className="description">
                Trabalhei desde os 17 anos até os 23 na área do varejo, o que me ensinou a lidar com diversas situações, gestão de pessoas, gestão de processos com organização e disciplina, liderança, atendimento ao cliente e acompanhamento de metas.
                <br></br>
                <br></br>
                Buscando sempre evoluir, deixei meu cargo de gerente para estudar programação, acredito muito na área da tecnologia, quero avançar e evoluir nesse mercado!
                <br></br>
                <br></br>
                Atualmente sou estudante na Trybe que é uma escola de programação com  mais de 1500 horas de formação que aborda fundamentos de desenvolvimento web, desenvolvimento, Front-end, Back-end, ciência da computação,metodologias ágeis e habilidades comportamentais.
                <br></br>
                <br></br>
                Buscando sempre conhecimento para crescer na área da tecnologia.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
