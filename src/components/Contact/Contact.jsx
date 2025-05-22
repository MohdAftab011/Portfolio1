import React from "react";

import styles from "./Contact.module.css";

import emailIcon from "../../assets/contact/emailIcon.png"
import githubIcon from "../../assets/contact/githubIcon.png"
import linkedinIcon from "../../assets/contact/linkedinIcon.png"

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:aftab22mohammad03@gmail.com">Email</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/mohammed-aftab11/">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://www.github.com/MohdAftab011">Github</a>
        </li>
      </ul>
    </footer>
  );
};