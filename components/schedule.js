import Link from 'next/link';
import { formatDate, formatTime } from '../lib/dateUtils.js';

export default function Schedule(props) {
  return (
    <div className="bg-white pb-2 rounded-b-md sm:px-4">
      <div className="bg-white px-4 py-2">
        <h2 className="text-2xl font-bold border-b-2 text-blue-500">Schedule</h2>
      </div>

      <div className="bg-white px-1 md:px-4">
        <table className="table-fixed">
          <thead>
            <tr>
              <th className="w-1/3 text-left">Opponent</th>
              <th>Date</th>
              <th>&nbsp;</th>
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
                <td className="text-center">{formatDate(game.start_date)}</td>
                <td>{formatTime(game.start_date)}</td>
                <td className="text-center">{(game.home_points) ? `${game.home_points}-${game.away_points}` : ''}</td>
                <td className={game.winLoss === 'W' ? "win" : "loss"}>{game.winLoss}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

