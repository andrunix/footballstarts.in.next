import Layout from '../../components/layout.js';
import Link from 'next/link';
import Image from 'next/image';
import { getAllOrgNames, getOrgSchedule, getOrgRecord } from '../../lib/schedule.js';
import Countdown from '../../components/countdown.js';
import Schedule from '../../components/schedule.js';
import Record from '../../components/record.js';
import { getDaysUntilNextGame } from '../../lib/dateUtils.js';

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
    return {
        props: {
            teamSchedule,
            record
        }
    };
}

export default function Team({teamSchedule, record}) {
    const diffDays = getDaysUntilNextGame(teamSchedule.schedule);
    return (
        <Layout>
          <div className="max-w-md mx-auto sm:max-w-xl">
            
            <Countdown teamId={teamSchedule.teamId} normalized={teamSchedule.normalized}
                       team={teamSchedule.team} days={diffDays}/>
            
            <Schedule {...teamSchedule} record={record}/>
          </div>
        </Layout>
    );
}
