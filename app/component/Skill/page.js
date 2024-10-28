import React from 'react';
import styles from './Skill.module.css';

const Skills = () => {
  return (
    <div className={styles.skill} id='Skill'>
      <div>
        <h1 className={styles.h1}>MERN STACK DEVELOPER</h1>
        <p className={styles.subtitle}>Building responsive and scalable applications</p>
        <p className={styles.description}>
          With a solid foundation in the MERN stack (MongoDB, Express, React, and Node.js), I specialize in creating 
          dynamic, high-performance web applications. My goal is to build solutions that are not only visually appealing 
          but also optimized for speed and scalability, ensuring a seamless user experience across all devices.
        </p>
        <p className={styles.description}>
          I continuously expand my skill set and stay updated with the latest industry trends, aiming to deliver
          cutting-edge, reliable applications. Here are the core technologies I work with:
        </p>
        <div className={styles.buttongroup}>
          <button className={styles.button1}>React.js</button>
          <button className={styles.button2}>Next.js</button>
          <button className={styles.button3}>Node.js</button>
          <button className={styles.button4}>MongoDB</button>
        </div>
      </div>
    </div>
  );
};

export default Skills;

