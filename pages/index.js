import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from '../styles/components/counter';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>

        Josh Hamilton Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Counter/>


    </div>
  );
}
