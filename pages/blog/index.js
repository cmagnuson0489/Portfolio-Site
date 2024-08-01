import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';
import styles from '../../styles/Blog.module.css';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Blog</h1>
        <nav>
          <Link href="/">Home</Link>
        </nav>
      </header>
      <section className={styles.section}>
        <ul className={styles.postList}>
          {allPostsData.map(({ id, title, date }) => (
            <li key={id} className={styles.postItem}>
              <Link href={`/blog/${id}`} className={styles.postLink}>
                {title}
              </Link>
              <br />
              <small className={styles.postDate}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}