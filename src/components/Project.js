import React from 'react';
import '../styles/Project.css';
import movieCards from '../images/movieCards.png'
import { Carousel } from 'react-bootstrap';

class Project extends React.Component {
  render() {
    return (
      <div className="project-container">
        <div>
          <h2 className="project-title">Projetos</h2>
        </div>
        <Carousel id="project" className="project-sub-container">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={movieCards}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={movieCards}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={movieCards}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={movieCards}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={movieCards}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={movieCards}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Project;


/*       <div id="project" className="project-container">
              <div className="project-sub-container">
                <div>
                  <h2 className="project-title">Projetos</h2>
                </div>
                <div className="projects">
                  <div className="projects-1">
                    <img src={ movieCards } alt="movie-card-crud" width="100%" />
                  </div>
                  <div className="projects-1">
                    <img src={ movieCards } alt="movie-card-crud" width="100%" />
                  </div>
                  <div className="projects-1">
                    <img src={ movieCards } alt="movie-card-crud" width="100%" />
                  </div>
                  <div className="projects-1">
                    <img src={ movieCards } alt="movie-card-crud" width="100%" />
                  </div>
                  <div className="projects-1">
                    <img src={ movieCards } alt="movie-card-crud" width="100%" />
                  </div>
                  <div className="projects-1">
                    <img src={ movieCards } alt="movie-card-crud" width="100%" />
                  </div>
                </div>
              </div>
            </div> */