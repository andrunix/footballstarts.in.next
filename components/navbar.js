import Autocomplete from './autocomplete.js';

export default function Navbar() {
  return (
    <div className=" bg-blue-400 text-white p-2 h-20 flex justify-center align-center">
      <div className="place-self-stretch min-w-0 pt-4">
        <Autocomplete />
      </div>
      <div className="invisible sm:visible text-xl tracking-wider p-2 pt-4 place-self-stretch">
        .footballstarts.in
      </div>
    </div>
  )
}