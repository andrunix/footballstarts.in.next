const homeGame = (team, home_team) => { 
  return home_team.toLowerCase() === team.toLowerCase();
};

const opponent = (team, home_team, away_team) => { 
  return home_team.toLowerCase() !== team ? `@${home_team}` : away_team;
};

function getScore(team, game) {
  let score = '';
  let wl = '';
  const { home_points, away_points, home_team, away_team } = game;
  if (home_points) {
      if ((homeGame(team, home_team) && away_points > home_points)
          || (!homeGame(team, home_team) && home_points > away_points)) {
          wl = 'W';
      } else {
          wl = 'L';
      }
      score = `${home_points} - ${away_points} ${wl}`;
  }
  return score;
}

const formatDate = (gameDate) => {
  const dt = new Date(gameDate);
  return `${(dt.getMonth()+1)}/${dt.getDate()}/${dt.getFullYear()}`;
}

export default function Schedule(props) {

  return (
    <>
      <table className="teamSchedule">
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
              <td>{opponent(props.team, game.home_team, game.away_team)}</td>
              <td>{formatDate(game.start_date)}</td>
              <td>{game.away_team}</td>
              <td>{getScore(props.team, game)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
