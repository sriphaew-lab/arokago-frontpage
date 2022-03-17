import Head from 'next/head';
import NextLink from 'next/link';
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
        <NextLink href="https://lin.ee/diwXfHR" passHref>
          <img
            width="100%"
            alt="arokago-frontpage"
            src="/images/FrontPage.gif"
          />
        </NextLink>

        <div className={styles.overflow}>WE WILL COMING SOON</div>
      </main>

      <footer className={styles.copyrightFooter}>
        <Typography>All rights reserved - ArokaGo © 2022</Typography>
      </footer>
    </div>
  );
}
