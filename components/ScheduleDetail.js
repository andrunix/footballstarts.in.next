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

const calcDays = (d) => {
    const now = new Date();
    const gd = new Date(d);
    const oneDay = 24*60*60*1000;
    const diffDays = Math.round( Math.abs( (gd.getTime() - now.getTime() ) / oneDay ) );
    return diffDays >= 0 ? diffDays: '';
};

export default function ScheduleDetail({schedule}) {
    const nextGame = findNextGame(schedule);
    
    return (
        <div className="py-2 flex-row rounded-md drop-shadow-xl">
          {schedule.map((game) => (
              <div key={game.id}
                   className={["m-1 p-2 hover:bg-blue-100 border rounded-sm", game.id === nextGame ?
                               "bg-green-100 border border-green-400" :
                               "border-t"].join(" ")}>
                
                <div className="inline-block flex-none w-1/3">
                  <Link href={`/teams/${game.normalizedOpponent}`}>
                    <a className={["text-blue-600 hover:text-blue-900", game.conference_game ? "conference-game" : ""].join(" ")}>{(game.homeGame) ? game.opponent : '@' + game.opponent}</a>
                  </Link>
                  <div className="text-xs text-gray-500">
                    {game.venue}
                  </div>
                </div>
                <div className="inline-block flex-none w-1/6 text-center">{formatDate(game.start_date)}</div>
                <div className="inline-block flex-none w-1/6 text-left">{formatTime(game.start_date)}</div>
                <div className="inline-block flex-none w-1/6 text-center">{(game.home_points) ? `${game.home_points}-${game.away_points}` :  `${calcDays(game.start_date)} days` }</div>
                <div className={["inline-block flex-none w-1/8 text-left", game.winLoss === 'W' ? "win" : "loss"].join(" ")}>{game.winLoss}</div>
              </div>
          ))}
          <div className="conference-game">Conference game</div>
        </div>
    );
}
