
Number.padLeft = (nr, len = 2, padChr = `0`) =>
  `${nr < 0 ? `-` : ``}${`${Math.abs(nr)}`.padStart(len, padChr)}`;

const getDaysUntilNextGame = (schedule) => {
  const today = new Date();
  const firstGame = schedule.find(s => new Date(s.start_date) > today).start_date;

  const oneDay = 24*60*60*1000;
  const target = new Date(firstGame);
  const diffDays = Math.round( Math.abs( (target.getTime() - today.getTime() ) / oneDay ) );
  return diffDays;
};

const formatDate = (gameDate) => {
  const fdate = (d) => `${(d.getMonth()+1)}/${d.getDate()}/${d.getFullYear()}`;
  const ftime = (d) => {
    let output = ``;
    let ampm = 'am', hour = d.getHours(), minute = d.getMinutes();
    if (hour) {
      minute = (minute > 0) ? `:${Number.padLeft(minute)}` : ``;
      if (hour >= 12) {
        hour = hour > 12 ? d.getHours() - 12 : hour;
        ampm = 'pm';
      }
      output = `${hour}${minute}${ampm}`;
    }
    return output;
  }

  const dt = new Date(gameDate);
  return `${fdate(dt)} ${ftime(dt)}`;
}

export {
  getDaysUntilNextGame,
  formatDate 
};
