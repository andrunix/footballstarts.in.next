import Head from 'next/head';
import Navbar from './navbar.js';

export default function Layout ({children}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>football starts in...</title>
        <meta name="description" content="I want to know when the next college football game is." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div className="bg-hero-pattern w-full h-full bg-no-repeat bg-cover">
        <div className="p-2">
          {children}
        </div>
      </div>
      <footer className="bg-gray-200 p-4 bg-transparent">
        <a href="https://xoso.io" target="_blank" rel="noopener noreferrer">
          &copy; 2019-2021, xoso
        </a>
      </footer>
    </>
  )
};