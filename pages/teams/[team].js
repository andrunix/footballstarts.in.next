import Layout from '../../components/layout.js';
import Link from 'next/link';
import { getAllOrgNames, getOrgSchedule } from '../../lib/schedule.js';
import Countdown from '../../components/countdown.js';
import Schedule from '../../components/schedule.js';
import { getDaysUntilNextGame } from '../../lib/dateUtils.js';

export async function getStaticPaths() {
  const paths = getAllOrgNames();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const teamSchedule = getOrgSchedule(params.team);
  return {
    props: {
      teamSchedule
    }
  }
}

export default function Team({teamSchedule}) {
  const diffDays = getDaysUntilNextGame(teamSchedule.schedule);

  return (
      <Layout>
        <div className="max-w-md mx-auto sm:max-w-xl">
          <Countdown team={teamSchedule.team} days={diffDays}/>
          <Schedule {...teamSchedule} />
        </div>
      </Layout>
    )
}
