import Link from 'next/link';
import styles from '../styles/Home.module.css';
import emailjs from 'emailjs-com';

export default function Home() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rhwhn35', 'template_cq2eok7', e.target, 'UCw9zcEEa4RWZvWR2')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message, please try again.');
      });

    e.target.reset();
  };
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
        <div className={styles.darkBlueBox}>
          <p>I have always been fascinated with technology and after my time in the Marine Corps I decided to get out of the military and use my GI Bill to pursue a
            bachelor's degree in Computer Science at California State University - San Bernardino. During my time there I also worked as a member of the Virtual Reality lab on my campus. During my time there I worked as a Software Developer creating projects for different departments on my campus. After graduation I also worked as a Software Support Engineer at the Third Floor Inc where I was mainly working with Python, C++ and Javascript. I was also participating in code reviews and providing feedback other developers as well. Please feel free to reach out to me if you are interested in my background or would like to discuss an opportunity you think I would be a good fit for.
          </p>
        </div>
      </section >

      <section id="projects" className={styles.section}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles['project-list']}>
          <div className={styles['project-item']}>
            <img src="/images/project1.jpg" alt="Project 1" />
            <h3>CSUSB Nursing Education Project</h3>
            <p>This project was developed for the Nursing Department at CSUSB and was created by our VR team. Our job was to create a
              simulation that would allow a student nurse to react with a simulated patient and have a detailed conversation with the patient.The entire simulation was designed to last about 10:00 to 15:00 minutes. This simulation allows Nursing professors to judge their students performance interacting with a patient. It also allows the student nurse to practice their behavior before they are placed in a real world environment.
            </p>
          </div>
          <div className={styles['project-item']}>
            <img src="/images/project2.jpg" alt="Project 2" />
            <h3>Breath of the Coyote</h3>
            <p>Our game was ranked first place by a team of judges that were provided by our professor and a team of industry    professionals.  This was a game developed for class.The project was to create a video game during the 10 week course in Unity. Our game was ranked first place in the class by a team of judges provided by our professor as well our professor himself. The judges were a mix of Computer Science Professors and Game Development professionals. The game can be of the team's choosing and can be in either 2D or 3D.
              This game was developed in 3D with a team of 10 (5 programmers, 2 artists, 2 musicians). The game is an open world, action adventure game with influences from games such as The Legend of Zelda: Breath of the Wild and The Elder Scrolls V: Skyrim. The game features a full third person character movement system, an environmental puzzle system, and a combat system.
            </p>
          </div>
          <div className={styles['project-item']}>
            <img src="/images/project3.jpg" alt="Project 3" />
            <h3>Command Line Tool</h3>
            <p>This a project that I worked on that allows you to stitch multiple images together using OpenCV and C++ to create one
              single panoramic image.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <form onSubmit={sendEmail}>
          <div className={styles['form-group']}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer className={styles.footer}>
        <div className={styles.socialNav}>
          <a href="https://www.linkedin.com/in/chris-magnuson" target="_blank">LinkedIn</a>
          <a href="https://www.instagram.com/yourprofile" target="_blank">Instagram</a>
          <a href="https://www.twitter.com/yourprofile" target="_blank">Twitter</a>
          <a href="https://www.github.com/cmagnuson0489" target="_blank">Github</a>
        </div>
      </footer>
    </div >
  );
}