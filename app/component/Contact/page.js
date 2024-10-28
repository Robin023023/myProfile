import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer} id='Contact'>
      <h1 className={styles.title}>Contact Me</h1>
      <p className={styles.info}>Email: <a href="mailto:023023robin@gmail.com" className={styles.link}>023023robin@gmail.com</a></p>
      <p className={styles.info}>LinkedIn: <a href="https://www.linkedin.com/in/robin-hossain-b31302287/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn Profile</a></p>
      <p className={styles.info}>GitHub: <a href="https://github.com/Robin023023" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub Profile</a></p>
      <p className={styles.info}>Mobile:01576583031</p>
    </div>
  );
};

export default Contact;