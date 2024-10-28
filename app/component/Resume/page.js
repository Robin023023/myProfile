import React from 'react';
import styles from './Resume.module.css';

const Resume = () => {
  return (
    <div className={styles.resumeContainer} id="Resume">
      <h1 className={styles.title}>My Resume</h1>
      
      <p className={styles.description}>
        I'm Robin, a passionate MERN stack developer with over three years of experience in building
        responsive and scalable web applications. My expertise lies in developing user-friendly interfaces, 
        managing back-end functionality, and implementing secure authentication systems. My goal is to 
        continuously enhance my skills and stay updated with the latest advancements in web development.
      </p>

      <p className={styles.description}>
        This resume highlights my technical skills, professional experience, and projects that showcase my 
        abilities in full-stack development. You can download my resume below for a comprehensive look at 
        my qualifications and past projects.
      </p>

      <a href="/img/pdf.png" download className={styles.btn}>
        Download My CV
      </a>
    </div>
  );
};

export default Resume;

