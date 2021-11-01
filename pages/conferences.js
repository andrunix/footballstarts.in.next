import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout.js';
// import { getAllOrgNames, getOrgSchedule } from '../lib/schedule.js';

import { getConferences } from '../lib/schedule.js';

export async function getStaticProps(context) {
  const conferences = getConferences();
  return {
    props: {
      conferences
    }
  };
}

export default function Conferences({conferences}) {
  return (
    <Layout>
      <div className="max-w-md mx-auto sm:max-w-xl">
        <div className="bg-white pb-2 rounded-b-md sm:px-4">
          <div className="bg-white px-4 py-2">
            <h2 className="text-2xl font-bold border-b-2 text-blue-500">Conferences</h2>
          </div>

          <div className="bg-white px-1 md:px-4">
            {conferences.conferences.map((conf) => (
              <div key={conf.id}>
                <Link href={`/conference/${conf.abbreviation.toLowerCase()}`}>
                  <a>{conf.short_name}</a>
                </Link>

              </div>
            ))}
          </div>
        </div>
      </div>

    </Layout>
  );
  }
