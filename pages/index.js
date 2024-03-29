import Cookies from "js-cookie";

import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout.js';
import Countdown from '../components/countdown.js';
import UpcomingGames from '../components/upcominggames.js';

import { getThisWeeksSchedule } from '../lib/schedule.js';
import { getDaysUntilNextGame } from '../lib/dateUtils.js';

export async function getStaticProps() {
  const schedule = getThisWeeksSchedule();
  return {
    props: { schedule }
  };
}

export default function Home({schedule}) {

  const SetCookie = () => {
    let visits = Cookies.get("visits");
    console.log('visits', visits);
    Cookies.set("visits", ++visits);
  };

  SetCookie();
  
  const diffDays = getDaysUntilNextGame(schedule);
  console.log('diffDays ', diffDays);
    
  return (
    <Layout>
      <Countdown days={diffDays}/>

      {diffDays >= 0 &&
       <UpcomingGames schedule={schedule} />
      }
    </Layout>
  );
}
