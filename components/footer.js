import Link from 'next/link';

export default function Footer () {
  return (
      <footer className="bg-gray-800 text-white opacity-60 border-t p-4  w-full flex flex-row">
        <div className="px-2">
          <Link href="/">
            <a>footballstarts.in</a>
          </Link>
        </div>
        <div className="px-2">
          <a href="https://xoso.io" target="_blank" rel="noopener noreferrer">
            &copy; 2019-2022, xoso
          </a>
        </div>
        <div className="px-2">
          <Link href="/privacy">
            <a>Privacy</a>
          </Link>
        </div>
        <div className="px-2">
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        
      </footer>
  );
}
