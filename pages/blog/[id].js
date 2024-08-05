import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/posts';
import styles from '../../styles/Blog.module.css';

export default function Post({ postData }) {
  return (
    <div className={styles.container}>
      <article>
        <h1 className={styles.sectionTitle}>{postData.title}</h1>
        <div className={styles.date}>
          {postData.date}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <div className={styles.backToBlog}>
        <Link href="/blog" legacyBehavior>
          <a className={styles.backToBlogLink}>← Back to blog</a>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  };
}
