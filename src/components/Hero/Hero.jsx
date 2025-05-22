
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero/heroImage.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Aftab</h1>
            <p className={styles.description}>
                Building Full-stack Apps with React and Node.js for over 2 years. 
                Ping me if you're curious or want to work together!
            </p >
            <div className={styles.buttonGroup}>
                <a
                    href="/resume.pdf"
                    download
                    className={styles.resumeBtn}
                >
                    Resume
                </a>
               <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=aftab22mohammad03@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactBtn}
                >
                    Contact Me
                </a>
            </div>

        </div>
        <img
        src={heroImage}
            alt="Hero image of me"
            className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  );
};