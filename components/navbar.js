import Link from 'next/link';
import Autocomplete from './autocomplete.js';

export default function Navbar() {
  return (
    <div className="bg-blue-400 text-white p-2 h-20 w-full inline-flex justify-center">
      <div className="flex-grow text-right min-w-0 pt-4">
        <Autocomplete />
      </div>
      <div className="hidden sm:inline-block text-xl tracking-wider p-2 pt-4 place-self-stretch text-left">
        <Link href="/">
          <a>.footballstarts.in</a>
        </Link>
      </div>
      <div className="inline-block flex-grow min-w-0 pt-4 px-4 text-right">
        <Link href="/conferences">
          <a>Conferences</a>
        </Link>
      </div>
    </div>
  );
}
