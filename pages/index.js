import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home(){
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Chris Magnuson</h1>
        <nav className={styles.nav}>
          <Link href="#about">About Me</Link>
          <Link href="#projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="#contact">Get in Touch</Link>
          <Link href="/resume.pdf" target="_blank">Resume</Link>
        </nav>
      </header>

      <section id="about" className={styles.section}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p>I have always been fascinated with technology and after my time in the Marine Corps I decided to get out of the military and use my GI Bill to pursue a 
           bachelor's degree in Computer Science at California State University - San Bernardino. During my time there I also worked as a member of the Virtual Reality
           lab on my campus. During my time there I worked as a Software Developer creating projects for different departments on my campus. After graduation I also worked
           as a Software Support Engineer at the Third Floor Inc where I was mainly working with Python, C++ and Javascript. Please feel free to reach out to me if you are 
           interested in my background or would like to discuss an opportunity you think I would be a good fit for.          
       </p>
      </section>

      <section id="projects" className={styles.section}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles['project-list']}>
          <div className={styles['project-item']}>
            <img src="/images/project1.jpg" alt="Project 1" />
            <h3>CSUSB Nursing Project</h3>
            <p>This was a project that I helped while working as a Software Developer for CSUSB's Virtual Reality Lab.</p>
          </div>
          <div className={styles['project-item']}>
            <img src="/images/project2.jpg" alt="Project 2" />
            <h3>Breath of the Coyote</h3>
            <p>This is a project that I worked on while at CSUSB that won first place in my Game Development class. </p>
          </div>
          <div className={styles['project-item']}>
            <img src="/images/project3.jpg" alt="Project 3" />
            <h3>Command Line Tool</h3>
            <p>This a project that I worked on that allows you to stitch multiple images together using OpenCV and C++ to create one single panoramic image.</p>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <form action="mailto:cmagnuson0489@gmail.com" method="post" encType="text/plain">
          <div className={styles['form-group']}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer className={styles.footer}>
        <a href="https://www.linkedin.com/in/chris-magnuson" target="_blank">LinkedIn</a>
        <a href="https://www.instagram.com/yourprofile" target="_blank">Instagram</a>
        <a href="https://www.twitter.com/yourprofile" target="_blank">Twitter</a>
        <a href="https://www.github.com/cmagnuson0489" target="_blank">Github</a>
      </footer>
    </div>
  );
}