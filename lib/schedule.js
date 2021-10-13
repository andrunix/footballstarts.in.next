import fs from 'fs';
import path from 'path';

const scheduleDirectory = path.join(process.cwd(), 'data');
const teamsDirectory = path.join(process.cwd(), 'data/teams');

export function getThisWeeksSchedule() {
  console.log(scheduleDirectory);
  const fileNames = fs.readdirSync(scheduleDirectory);
  console.table(fileNames);

  const fullPath = path.join(scheduleDirectory, fileNames[0]);
  console.log(fullPath);

  const strContents = fs.readFileSync(fullPath, 'utf8');
  console.log(strContents);
  // return { id: 0, schedule: fileNames[0] };
  const sched = JSON.parse(strContents);

  return sched;
}


export function getAllOrgNames() {
  
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

  // const teams = [ 'tennessee', 'texas', 'texas-a-m', 'texas-tech', 'vols'];
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

  const scheduleData = fs.readFileSync(fullPath, 'utf8');
  return {
    team,
    schedule: JSON.parse(scheduleData)
  }
}