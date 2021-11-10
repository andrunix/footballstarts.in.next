import Head from 'next/head';
import Link from 'next/link';
import Navbar from './navbar.js';
import Footer from './footer.js';

export default function Layout ({children}) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <meta charset="UTF-8"/>
        <meta name="google" content="notranslate"/>
        <meta httpEquiv="Content-Language" content="en"/>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />    
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>football starts in...</title>
        <meta name="description" content="I want to know when the next college football game is." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

      <main className="flex-grow">
        <div className="p-2 mx-auto">
          <div className="max-w-md mx-auto sm:max-w-xl">
            {children}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};
