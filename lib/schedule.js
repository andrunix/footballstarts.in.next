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
    teamId: scheduleData.teamId,
    normalized: team, 
    team: scheduleData.team,
    schedule: scheduleData.schedule
  }
}

export function getOrgRecord(team) {
    const fileName = `${team}/record.json`;
    const fullPath = path.join(teamsDirectory, fileName);

    const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
    return data.length > 0 ? data[0] : {};
}


export function getConferences() {
  const sortConf = (a, b) => {
    if (a.short_name < b.short_name) {
      return -1;
    } else if (a.short_name > b.short_name) {
      return 1;
    }
    return 0;
  };
  
  const fileName = path.join(scheduleDirectory, 'conferences.json');
  let confData = JSON.parse(fs.readFileSync(fileName, 'utf8'));
  confData.sort(sortConf);
  return { conferences: confData.filter((c) => c.classification) };
}

export function getConferenceFromAbbreviation(abbr) {
  const fileName = path.join(scheduleDirectory, 'conferences.json');
  let confData = JSON.parse(fs.readFileSync(fileName, 'utf8'));
  
  const conf = confData.find(c => c.abbreviation.toLowerCase() === abbr.toLowerCase());
  return conf;
}


export function getConferenceAbbreviations() {
  let confs = getConferences();

  return confs.conferences.map((c) => {
    return {
      params: {
        conf: c.abbreviation.toLowerCase()
      }
    }
  });
}

export function getConferenceTeams(abbreviation) {
  const filePath = path.join(scheduleDirectory, `${abbreviation}/teams.json`);
  const teams = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return teams;
}
