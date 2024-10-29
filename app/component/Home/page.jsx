"use client";

import Link from 'next/link';
import styles from './Home.module.css';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className={styles.homecontainer}>
      <h1>
      <TypeAnimation
        sequence={[
          "Welcome to My Portfolio",
          1000, // Waits 1 second
          "", 
          500, // Clears the text and waits 0.5 second
          "Welcome to My Portfolio",
        ]}
        speed={50} // Speed of typing
        repeat={Infinity} // Infinite loop
      />
    </h1>

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

