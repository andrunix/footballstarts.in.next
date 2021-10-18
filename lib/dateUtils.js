
const getDaysUntilNextGame = (schedule) => {
  const today = new Date();
  const firstGame = schedule.find(s => new Date(s.start_date) > today).start_date;
  console.log('Next Game: ', firstGame);
        
  const oneDay = 24*60*60*1000;
  const target = new Date(firstGame);
  const diffDays = Math.round( Math.abs( (target.getTime() - today.getTime() ) / oneDay ) );
  return diffDays;
};

const formatDate = (gameDate) => {
  const dt = new Date(gameDate);
  return `${(dt.getMonth()+1)}/${dt.getDate()}/${dt.getFullYear()}`;
}

export {
  getDaysUntilNextGame,
  formatDate 
};
