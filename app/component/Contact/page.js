 "use client"

import React from 'react';
import styles from './Contact.module.css';
import { TypeAnimation } from "react-type-animation";

const Contact = () => {
  return (
    <div className={styles.contactContainer} id='Contact'>
      <h1>
      <TypeAnimation
        sequence={[
          "Contact Me",
          1000, // Waits 1 second
          "", 
          500, // Clears the text and waits 0.5 second
          "Contact Me",
        ]}
        speed={50} // Speed of typing
        repeat={Infinity} // Infinite loop
      />
    </h1>
      <p className={styles.info}>Email: <a href="mailto:023023robin@gmail.com" className={styles.link}>023023robin@gmail.com</a></p>
      <p className={styles.info}>LinkedIn: <a href="https://www.linkedin.com/in/robin-hossain-b31302287/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn Profile</a></p>
      <p className={styles.info}>GitHub: <a href="https://github.com/Robin023023" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub Profile</a></p>
      <p className={styles.info}>Mobile:01576583031</p>
    </div>
  );
};

export default Contact;