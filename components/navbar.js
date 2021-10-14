import { useState } from 'react';
import style from "./navbar.module.css";

export default function Navbar() {
  const [searchTeam, setState] = useState('');

  const handler = (event) => {
    setState(event.key);
  };

  return (
    <div className={style.navbar}>
    <div className={style.col}>
      <div>
      ------- {searchTeam} ------
        {/* This needs to be a separate component */}
        <input type="text"
              id="searchtext"
              placeholder="team name" 
              onKeyPress={(e) => handler(e)}
              />
              
      </div>
    </div>
    <div className={style.col}>
      .footballstarts.in
    </div>
    </div>
  )
}