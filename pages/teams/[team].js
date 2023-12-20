import Cookies from 'js-cookie';
import Layout from '../../components/layout.js';
import Link from 'next/link';
import Image from 'next/image';
import { getAllOrgNames, getOrgSchedule, getOrgRecord } from '../../lib/schedule.js';
import Countdown from '../../components/countdown.js';
import Schedule from '../../components/schedule.js';
import Record from '../../components/record.js';
import { getDaysUntilNextGame } from '../../lib/dateUtils.js';
import { useState, useEffect } from 'react';

export async function getStaticPaths() {
    const paths = getAllOrgNames();
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const teamSchedule = getOrgSchedule(params.team);
    const record = getOrgRecord(params.team);
    
    console.log(record);
    return {
        props: {
            teamSchedule,
            record
        }
    };
}

export default function Team({teamSchedule, record}) {

  Cookies.set("lastVisited", teamSchedule.normalized);
  // see if this is already a favorite by checking the cookies...

  let thisFav = false;
  let favCookie = Cookies.get("favteams") || '';
  console.log(`Fav cookie: [${favCookie}]`);

  let favArray = favCookie !== '' ? favCookie.split(';') : [];
  console.log(favArray);

  if (!favArray.includes(teamSchedule.normalized)) {
    console.log('Not a fav, ', favArray);
  } else {
    // yes, a fav!
    console.log("one of your favs, ", teamSchedule.normalized);
    thisFav = true;
  }

  const [favorites, setFavorites] = useState(favArray);
  const [fav, setFav] = useState(favArray.includes(teamSchedule.normalized));

  const toggleMeFav = (value) => {
    console.log('Parent toggle, ', value);
    if (value) {
      // add it to the favorites
      console.log('adding to favorites...');
      setFavorites([ ...favorites, teamSchedule.normalized] );
      setFav(true);
    } else {
      // strip it from the favorites
      setFavorites(favorites.filter(x => x !== teamSchedule.normalized));
      setFav(false);
    }
    
  };

  useEffect(() => {
    Cookies.set('favteams', favorites.join(';'));
    setFav(favArray.includes(teamSchedule.normalized));

  });
  
  
  const diffDays = getDaysUntilNextGame(teamSchedule.schedule);
  return (
    <Layout>
      <div className="max-w-md mx-auto sm:max-w-xl">
        
        <Countdown teamId={teamSchedule.teamId} normalized={teamSchedule.normalized}
                   team={teamSchedule.team} days={diffDays} fav={fav}
                   onClickFav={toggleMeFav}
        />
        

        <Schedule {...teamSchedule} record={record}/>

      </div>
    </Layout>
  );
}
