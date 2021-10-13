import styles from "./countdown.module.css";

export default function Countdown({team, days}) {
  return (
    <>
      <div className="col">
        <div className="team">{team} football starts in</div>
      </div>
        
      <div className="container">
        <div id="days" className={["col", styles.days].join(' ')}>{days}</div>
        <div className={["col", styles.measure].join(' ')}>days</div>
      </div>
    </>
  )
}