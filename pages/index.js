import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Typography } from '@material-ui/core';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ArokaGo</title>
        <meta
          name="description"
          content="Comprehensive platform with integrative professional health care providers for your best treatment journey"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img width="100%" src="/images/FrontPage.gif" />
        <div className={styles.overflow}>WE WILL COMING SOON</div>
      </main>

      <footer className={styles.copyrightFooter}>
        <Typography>All rights reserved - ArokaGo © 2022</Typography>
      </footer>
    </div>
  );
}
