import Head from 'next/head';
import Navbar from './navbar.js';
import styles from './layout.module.css';

export default function Layout ({children}) {
  return (
    <>
      <Head>
        <title>football starts in...</title>
        <meta name="description" content="I want to know when the next college football game is." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

    <div className={styles.layoutContainer}>
        {children}

      <footer className="footer">
        <a
          href="https://xoso.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by xoso.io
        </a>
      </footer>
    </div>
    </>
  )
};