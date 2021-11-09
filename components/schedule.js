import Link from 'next/link';
import { formatDate, formatTime } from '../lib/dateUtils.js';

const findNextGame = (sched) => {
  let nextId = 0;
  const now = new Date();
  const nextGames = sched.filter(g => new Date(g.start_date) > now);
  if (nextGames.length) {
    nextId = nextGames[0].id;
  }
  return nextId;
};

export default function Schedule({schedule}) {

  const nextGame = findNextGame(schedule);
  
  return (
    <>
      <div className="bg-white px-4 py-2">
        <h2 className="text-2xl font-bold border-b-2 text-blue-500">Schedule</h2>
      </div>
      <div className="bg-white px-2 md:px-4 py-2">
        <div className="py-2 flex-row rounded-md drop-shadow-xl">
          {schedule.map((game) => (
            <div key={game.id} className={["m-1 p-2 hover:bg-blue-100 border rounded-sm", game.id === nextGame ? "bg-green-100 border border-green-400" : "border-t"].join(" ")}>
              
              <div className="inline-block flex-none w-1/3">
                <Link href={`/teams/${game.normalizedOpponent}`}>
                  <a className="text-blue-600 hover:text-blue-900">{(game.homeGame) ? game.opponent : '@' + game.opponent}</a>
                </Link>
              </div>
              <div className="inline-block flex-none w-1/6 text-center">{formatDate(game.start_date)}</div>
              <div className="inline-block flex-none w-1/6 text-left">{formatTime(game.start_date)}</div>
              <div className="inline-block flex-none w-1/6 text-center">{(game.home_points) ? `${game.home_points}-${game.away_points}` : ''}</div>
              <div className={["inline-block flex-none w-1/8 text-left", game.winLoss === 'W' ? "win" : "loss"].join(" ")}>{game.winLoss}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

