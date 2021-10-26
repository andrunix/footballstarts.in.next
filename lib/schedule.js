import fs from 'fs';
import path from 'path';
import { formatDate } from './dateUtils.js';

const scheduleDirectory = path.join(process.cwd(), 'data');
const teamsDirectory = path.join(process.cwd(), 'data/teams');

export function getThisWeeksSchedule() {
  const fullPath = path.join(scheduleDirectory, 'week1-schedule.json');
  const sched = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  return sched;
}

const homeGame = (team, home_team) => { 
  return home_team.toLowerCase() === team.toLowerCase();
};

const opponent = (team, home_team, away_team) => { 
  return home_team.toLowerCase() !== team ? `@${home_team}` : away_team;
};

const getScore = (team, game) => {
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
      score = `${home_points} - ${away_points}`;
  }
  return { score, wl };
}


// This takes the raw schedule from the API and makes it
// easier for presentation.
// return something that reflects the displayed table.
// - Opponent
// - Date
// - Location
// - Score { score, wl}
const prettifySchedule = (team, schedule) => {
  const psched = schedule.map(game => {
    const homeGame = team !== game.away_team;
        return {
        id: game.id,
        opponent: opponent(team, game.home_team, game.away_team), 
        home_team: game.home_team,
        start_date: game.start_date,
        gameDate: formatDate(game.start_date),
        score: getScore(team, game),
        homeGame
      }
  });
  return psched;
};

// Returns an array that looks like this:
// [
//   {
//     params: {
//       id: 'tennessee'  
//     }
//   },
//   {
//     params: {
//       id: 'texas'
//     }    
//   }
// ]
export function getAllOrgNames() {
  const teams = fs.readdirSync(teamsDirectory);
  return teams.map(team => {
    return {
      params: {
        team: team
      }
    }
  });
};

export function getOrgSchedule(team) {
  const scheduleName = `${team}/schedule.json`;
  const fullPath = path.join(teamsDirectory, scheduleName);

  const scheduleData = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  return {
    normalized: team, 
    team: scheduleData.team,
    schedule: scheduleData.schedule
  }
}

