import Link from 'next/link';
import { normalizeName } from '../lib/teamUtils';
import { formatDate } from '../lib/dateUtils.js';

export default function UpcomingGames({schedule}) {

  const firstDate = schedule[0].start_date;

  return (
    <>
    <div className="bg-white px-4 py-2">
      <h2 className="text-2xl font-bold border-b-2 text-blue-500">Upcoming games</h2>
    </div>
    <div className="bg-white px-4">
      <div className="px-4 py-6 bg-blue-400 text-white grid grid-cols-3 rounded-md drop-shadow-lg">
        {schedule.filter(game => game.start_date <= firstDate).map(game => (
          <>
          <div key={game.team}>
            <Link href={`/teams/${normalizeName(game.home_team)}`}>
              <a className="text-white hover:text-blue-50">{game.home_team}</a>
            </Link>
          </div>
          <div>
            <Link href={`/teams/${normalizeName(game.away_team)}`}>
              <a className="text-white hover:text-blue-50">{game.away_team}</a>
            </Link>
          </div>
          <div>{formatDate(game.start_date)}</div>
          </>
        ))}
      </div>
    </div>
    </>
  )
}
