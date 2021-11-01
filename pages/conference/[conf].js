import Layout from '../../components/layout.js';
import Link from 'next/link';
import Image from 'next/image';

import { getConferenceFromAbbreviation, getConferenceAbbreviations, getConferenceTeams } from '../../lib/schedule.js';


export async function getStaticPaths() {
  const paths = getConferenceAbbreviations();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const conference = getConferenceFromAbbreviation(params.conf);
  const teams = getConferenceTeams(params.conf);
  return {
    props: {
      teams,
      conference
    }
  };
}

export default function Conference({teams, conference}) {
  return (
    <Layout>

      <div className="max-w-md mx-auto sm:max-w-xl">
        <div className="bg-white pb-2 rounded-b-md sm:px-4">
          <div className="bg-white px-4 py-2">
            <h2 className="text-2xl font-bold border-b-2 text-blue-500">{conference.short_name}</h2>
          </div>

          <div className="bg-white px-1 md:px-4">
        {teams.map((team) => (
          <div className="teamlogo">
            <img src={team.logos[0]}/>
            <Link href={`/teams/${team.normalizedName}`}>
              <a>{team.school}</a>
            </Link>
          </div>
        ))}
            
          </div>
        </div>
      </div>



      

    </Layout>
  );
}
