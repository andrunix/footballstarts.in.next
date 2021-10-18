import Link from 'next/link';
import { normalizeName } from '../lib/teamUtils';
import { formatDate } from '../lib/dateUtils.js';

export default function UpcomingGames({schedule}) {

  const firstDate = schedule[0].start_date;

  return (
    <div className="bg-blue-50 px-20 m-20">
      <h2 className="text-4xl font-bold border-b-2 text-blue-500">Upcoming games</h2>

      <div className="p-20 bg-blue-900 grid grid-cols-3 rounded-lg drop-shadow-lg">
        {schedule.filter(game => game.start_date <= firstDate).map(game => (
          <>
          <div key={game.team}>
            <Link href={`/teams/${normalizeName(game.home_team)}`}>
              <a className="text-white hover:text-blue-50">{game.home_team}</a>
            </Link>
          </div>
          <div>
            <Link href={`/teams/${normalizeName(game.away_team)}`}>
              <a className="text-blue-600 hover:text-blue-900">{game.away_team}</a>
            </Link>
          </div>
          <div>{formatDate(game.start_date)}</div>
          </>
        ))}
      </div>
    </div>
  )
}
