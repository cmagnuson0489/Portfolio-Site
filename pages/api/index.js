import Link from 'next/link';
import styles from '../styles/Home.module.css';
export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>My Portfolio</h1>
        <nav>
          <Link href="#about">About Me</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Get in Touch</Link>
        </nav>
      </header>

      <section id="about" className={styles.section}>
        <h2>About Me</h2>
        <p>I have always been fascinated with technology and after my time in the Marine Corps I decided to get out of the military and use my GI Bill to pursue a
          bachelor's degree in Computer Science at California State University - San Bernardino. During my time there I also worked as a member of the Virtual Reality
          lab on my campus. During my time there I worked as a Software Developer creating projects for different departments on my campus. After graduation I also worked
          as a Software Support Engineer at the Third Floor Inc where I was mainly working with Python, C++ and javascript. Please feel free to reach out to me if you are
          interested in my background or would like to discuss an opportunity you think I would be a good fit for.

        </p>
      </section>

      <section id="projects" className={styles.section}>
        <h2>Projects</h2>
        <ul>
          <li>Project 1: Description</li>
          <li>Project 2: Description</li>
          <li>Project 3: Description</li>
        </ul>
      </section>

      <section id="contact" className={styles.section}>
        <h2>Get in Touch</h2>
        <form action="mailto:cmagnuson0489@gmail.com" method="post" enctype="text/plain">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer className={styles.footer}>
        <a href="https://www.linkedin.com/in/chris-magnuson/" target="_blank">LinkedIn</a>
        <a href="https://www.instagram.com/yourprofile" target="_blank">Instagram</a>
        <a href="https://www.twitter.com/yourprofile" target="_blank">Twitter</a>
      </footer>
    </div>
  )
}
