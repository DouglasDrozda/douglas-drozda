import React from 'react';
import '../styles/About.css';
import myphoto from '../images/myphoto.png';

class About extends React.Component {
  render() {
    return (
      <section id="about" className="about-container">
        <div className="about-sub-container">
          <div className="about-tilte-contain">
            <h2 className="about">Sobre</h2>
          </div>
          <div className="description-contain">
            <img src={ myphoto } alt="my-img" width="350px"/>
            <div>
              <p className="description-doug">Douglas Drozda</p>
              <p className="description">
                Inicialmente trabalhei na área do varejo por 6 anos, onde tiver a oportunidade de aprender habilidades com o público, liderança, gestão de negócios e equipe.
                <br></br>
                <br></br>
                A tecnologia sempre me motivou, pois é algo que sempre estará em constante evolução e desde o início de 2021 venho me aprimorando na área.<br></br>
                Atualmente sou formando em <b>Front-end</b> com conhecimentos em <b>HTML/CSS, React, JavaScript Redux, Context API e Jest</b>,
                
                <br></br>
                e estou cursando Desenvolvimento Web na Trybe.
                <br></br>
                <br></br>
                 A Trybe é uma escola de programação com  mais de 1500 horas de formação que aborda fundamentos de desenvolvimento web, Front-end, Back-end, ciência da computação, metodologias ágeis e habilidades comportamentais.
                <br></br>
                <br></br>
                Sempre em busca de conhecimentos para crescer na área da tecnologia.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;




// Sou apaixonado por tecnologia e desde o início de 2021 venho me aprimorando na área, atualmente sou formando em front-end e estou cursando Desenvolvimento Web na Trybe.