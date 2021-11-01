import Link from 'next/link';
import { normalizeName } from '../lib/teamUtils';
import { formatDate } from '../lib/dateUtils.js';

export default function UpcomingGames({schedule}) {
  const now = new Date().getTime();
  return (
    <>
    <div className="bg-white px-4 py-2">
      <h2 className="text-2xl font-bold border-b-2 text-blue-500">Upcoming games</h2>
    </div>
    <div className="bg-white px-4">
      <div className="px-4 py-6 flex-row rounded-md drop-shadow-xl">
        {schedule.filter(game => new Date(game.start_date).getTime() >= now).map(game => (
          <div className="m-2 p-2 hover:bg-blue-100 border rounded-sm">
            <div className="inline-block flex-none w-1/3 p-2">
              <Link href={`/teams/${normalizeName(game.home_team)}`}>
                <a className="text-blue-500 hover:text-blue-400">{game.home_team}</a>
              </Link>
            </div>
            <div className="inline-block flex-none w-1/3 p-2">
              <Link href={`/teams/${normalizeName(game.away_team)}`}>
                <a className="text-blue-500 hover:text-blue-400">{game.away_team}</a>
              </Link>
            </div>
            <div className="inline-block flex-none w-1/3 p-2">
              {formatDate(game.start_date, false, true)}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
