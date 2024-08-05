import Link from 'next/link';
import styles from '../../styles/Blog.module.css';
import { getSortedPostsData } from '../../lib/posts';

export default function Blog({ allPostsData }) {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/" legacyBehavior>
          <a className={styles.backToHomeLink}>← Back to Home</a>
        </Link>
      </nav>
      <ul className={styles.blogList}>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id} className={styles.blogPost}>
            <Link href={`/blog/${id}`} legacyBehavior>
              <a className={styles.blogLink}>
                <h3>{title}</h3>
                <small>{date}</small>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

