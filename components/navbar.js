import Autocomplete from './autocomplete.js';

export default function Navbar() {
  return (
    <div className=" bg-blue-400 p-4 h-20 flex items-stretch place-content-center">

      <div className="place-items-end align-middle">
        <Autocomplete />
      </div>
      <div className="text-2xl">
        .footballstarts.in
      </div>

    </div>
  )
}