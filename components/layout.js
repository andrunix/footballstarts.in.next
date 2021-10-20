import Head from 'next/head';
import Navbar from './navbar.js';
// import styles from './layout.module.css';

export default function Layout ({children}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>football starts in...</title>
        <meta name="description" content="I want to know when the next college football game is." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-hero-pattern w-full h-full bg-no-repeat bg-cover">
        <Navbar/>

        <div className="px-8 py-4">
          {children}
        </div>

        <footer className="bg-gray-200 p-4">
          <a href="https://xoso.io" target="_blank" rel="noopener noreferrer">
            Powered by xoso.io
          </a>
        </footer>
      </div>
    </>
  )
};