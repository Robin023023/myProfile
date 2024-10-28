"use client";

import Link from 'next/link';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homecontainer}>
      <h1 className={styles.h1}>Welcome to My Portfolio</h1>
      <p className={styles.p}>Hi, I am Robin Hossain, a MERN stack developer. I specialize in JavaScript, React, and Node.js. Check out my projects and skills.</p>
      <div className={styles.buttongroup}>
        <Link href="#Project">
          <button className={styles.button}>Projects</button>
        </Link>
        <Link href="#Skill">
          <button className={styles.button}>Skills</button>
        </Link>
        <Link href="/#Resume">
          <button className={styles.button}>Resume</button>
        </Link>
        <Link href="/#Contact">
          <button className={styles.button}>Contact</button>
        </Link>
      </div>
      <div className={styles.socialLinks}>
        <a className={styles.href} href="https://github.com/Robin023023" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className={styles.href} href="https://www.linkedin.com/in/robin-hossain-b31302287/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
};

export default Home;

