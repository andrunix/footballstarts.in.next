
Number.padLeft = (nr, len = 2, padChr = `0`) =>
  `${nr < 0 ? `-` : ``}${`${Math.abs(nr)}`.padStart(len, padChr)}`;


const getDaysUntilNextGame = (schedule) => {
  const today = new Date();
  
  const firstGame = schedule.find(s => new Date(s.start_date) > today); // .start_date;
  if (firstGame) {
    console.log(JSON.stringify(firstGame))
  } else {
    console.log('No next game!');
  }

  const oneDay = 24*60*60*1000;
  const target = new Date(firstGame.start_date);
  const diffDays = Math.round( Math.abs( (target.getTime() - today.getTime() ) / oneDay ) );
  return diffDays;
};

const formatTime = (gameDate) => {
    let output = ``;
    const dt = new Date(gameDate);
    let ampm = 'am', hour = dt.getHours(), minute = dt.getMinutes();
    if (hour) {
        minute = (minute > 0) ? `:${Number.padLeft(minute)}` : ``;
        if (hour >= 12) {
            hour = hour > 12 ? dt.getHours() - 12 : hour;
            ampm = 'pm';
        }
        output = `${hour}${minute}${ampm}`;
    }
    return output;
};

const formatDate = (gameDate, withYear = false,  withTime = false) => {
    const fdate = (d) => `${(d.getMonth()+1)}/${d.getDate()}`;
    const year = (d) => `/${d.getFullYear()}`;
    const dt = new Date(gameDate);
    return `${fdate(dt)}${withYear ? year(dt) : ''} ${withTime ? formatTime(dt) : ''}`;
}

export {
    getDaysUntilNextGame,
    formatDate,
    formatTime
};
