"use client";

import { useState } from 'react';
import styles from './project.module.css';
import projects from './videojson';

const Projects = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className={styles.container} id="Project">
      <h1 className={styles.title}>My Projects Video</h1>
      <p className={styles.introText}>
        Here’s a collection of some of my best projects. Each one demonstrates a unique set of skills,
        from front-end development to full-stack applications. Click on any project to view a video demonstration, 
        or access the code repository for more details.
      </p>
      <div className={styles.projectGrid}>
        {projects && projects.map((project) => (
          <div className={styles.projectCard} key={project.id}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
            <button className={styles.btn} onClick={() => handleOpenModal(project)}>Video</button>
             <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className={styles.repoLink}>
              View Code
            </a>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={handleCloseModal}>&times;</span>
            <video controls className={styles.video} autoPlay>
              <source src={selectedProject.video} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

