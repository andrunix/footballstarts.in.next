import Layout from '../../components/layout.js';
import Link from 'next/link';
import { getAllOrgNames, getOrgSchedule } from '../../lib/schedule.js';
import Countdown from '../../components/countdown.js';
import Schedule from '../../components/schedule.js';

export async function getStaticPaths() {
  const paths = getAllOrgNames();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  console.log('gsp: ', params);
  const teamSchedule = getOrgSchedule(params.team);
  return {
    props: {
      teamSchedule
    }
  }
}

const getDaysUntilNextGame = (schedule) => {
  const today = new Date();
  const firstGame = schedule.find(s => new Date(s.start_date) > today).start_date;
  console.log('Next Game: ', firstGame);
        
  const oneDay = 24*60*60*1000;
  const target = new Date(firstGame);
  const diffDays = Math.round( Math.abs( (target.getTime() - today.getTime() ) / oneDay ) );
  return diffDays;
};

export default function Team({teamSchedule}) {
  const diffDays = getDaysUntilNextGame(teamSchedule.schedule);

  return (
      <Layout>
        <>
          <Countdown team={teamSchedule.team} days={diffDays}/>
          <Schedule {...teamSchedule} />
        </>
      </Layout>
    )
}
