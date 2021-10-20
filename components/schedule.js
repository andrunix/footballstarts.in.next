import Link from 'next/link';

const formatDate = (gameDate) => {
  const dt = new Date(gameDate);
  return `${(dt.getMonth()+1)}/${dt.getDate()}/${dt.getFullYear()}`;
}

export default function Schedule(props) {

  return (
    <>
    <div className="bg-white px-20">
      <h2 className="text-4xl font-bold border-b-2 text-blue-500">Schedule</h2>
    </div>
    <div className="bg-white flex justify-center">

      <table className="">
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
                  <a className="text-blue-600 hover:text-blue-900">{(game.homeGame) ? game.opponent : '@' + game.opponent}</a>
                </Link>
                </td>
              <td>{formatDate(game.start_date)}</td>
              <td>{(game.home_points) ? `${game.home_points} - ${game.away_points}` : ''}</td>
              <td className={`${game.winLoss}`}>{game.winLoss}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

