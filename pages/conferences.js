import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout.js';

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
        <div className="bg-white pb-2 rounded-md sm:px-4">
          <div className="bg-white px-4 py-2">
            <h2 className="text-2xl font-bold border-b-2 text-blue-500">Conferences</h2>
          </div>

          <div className="bg-white px-1 md:px-4 flex-wrap text-xl">
            
            {conferences.conferences.map((conf) => (
                <div>
                  <div className="hover:bg-blue-100 p-2 m-2  border border-gray-200 rounded-sm" key={conf.id}>
                  <div className="inline align-center p-4">
                    <Image src={`/images/${conf.abbreviation.toLowerCase()}_logo.svg`} width="45px" height="45px"/>
                  </div>
                    <Link href={`/conference/${conf.abbreviation.toLowerCase()}`}>
                      <a>{conf.short_name}</a>
                    </Link>
                  </div>
                </div>
            ))}
        </div>
      </div>
    </div>

    </Layout>
  );
  }
