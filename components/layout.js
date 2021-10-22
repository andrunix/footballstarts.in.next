import Head from 'next/head';
import Link from 'next/link';
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
      <div className="bg-hero-pattern w-full h-screen bg-no-repeat bg-cover">
        <div className="p-2 mx-auto">
          <div className="max-w-md mx-auto sm:max-w-xl">
            {children}
          </div>
        </div>
        <footer className="bg-gray-800 text-white opacity-60 border-t p-4 fixed bottom-0 w-full flex flex-row">
          <div className="px-2">
            <Link href="/">
              <a>footballstarts.in</a>
            </Link>
          </div>
          <div className="px-2">
          <a href="https://xoso.io" target="_blank" rel="noopener noreferrer">
            &copy; 2019-2021, xoso
          </a>
          </div>
        </footer>
      </div>
    </>
  )
};