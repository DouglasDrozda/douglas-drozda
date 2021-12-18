import React, { useState } from 'react';
import '../styles/Project.css';
import { Modal } from 'react-bootstrap';
import data from '../service/data';

function Project() {
  const [show, setShow] = useState(false);
  const [img, setImg] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [github, setGithub] = useState('');


  const handleShow = () => setShow(!show);

  const getInfosCards = (link, image, description, github) => {
    setLink(link);
    setImg(image);
    setDescription(description);
    setGithub(github)
  }

  return (
    <div id="project" className="project-container">
      <div className="project-sub-container">
        <div>
          <h2 className="project-title">Projetos</h2>
        </div>
        <div className="projects">
          <div className="projects" onClick={handleShow}>
            <Modal
              show={show}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <img src={img} alt="movie-card-crud" width="100%" />
              </Modal.Header>
              <Modal.Body>
                <p>{description}</p>
              </Modal.Body>
              <Modal.Footer>
                <a href={link} className="btn-project" target="_blank" rel="noreferrer">
                  Visitar projeto
                </a>
                <a href={github} className="btn-github" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </Modal.Footer>
            </Modal>
              {
                Object.values(data).map((card) => {
                  return (
                    <div className="projects-1">
                      <img src={card.img} alt={card.name} onClick={() => getInfosCards(card.link, card.img, card.description, card.github)} width="100%" className="img-card" />
                    </div>)
                })
              }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

