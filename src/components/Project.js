import React from 'react';
import '../styles/Project.css';
import movieCards from '../images/movieCards.png'

class Project extends React.Component {
  render() {
    return (
      <div className="project-container">
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
      </div>
    );
  }
}

export default Project;
