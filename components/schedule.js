import Link from 'next/link';
import styles from './schedule.module.css';

const formatDate = (gameDate) => {
  const dt = new Date(gameDate);
  return `${(dt.getMonth()+1)}/${dt.getDate()}/${dt.getFullYear()}`;
}

export default function Schedule(props) {

  return (
    <div className="container">
      <table className={styles.teamSchedule}>
        <thead>
          <tr>
            <th>Opponent</th>
            <th>Date</th>
            <th>Score</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>

          {props.schedule.map((game) => (
            <tr key={game.id}>
              <td>
                <Link href={`/teams/${game.normalizedOpponent}`}>
                  <a>{(game.homeGame) ? game.opponent : '@' + game.opponent}</a>
                </Link>
                </td>
              <td>{formatDate(game.start_date)}</td>
              <td>{(game.home_points) ? `${game.home_points} - ${game.away_points}` : ''}</td>
              <td>{game.winLoss}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
