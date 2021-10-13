import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={style.navbar}>
    <div className={style.col}>
      <div>

        {/* This needs to be a separate component */}
        <input type="text"
              id="searchtext"
              placeholder="team name" />
              
      </div>
    </div>
    <div className={style.col}>
      .footballstarts.in
    </div>
    </div>
  )
}