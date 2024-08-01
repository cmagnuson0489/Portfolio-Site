import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/posts';
import styles from '../../styles/Blog.module.css';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>{postData.title}</h1>
        <nav>
          <Link href="/blog">Back to Blog</Link>
        </nav>
      </header>
      <article className={styles.articleContent}>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
}