import Link from 'next/link';
import Layout from '../components/layout.js';

export default function Custome404() {
    return (
        <>
          <Layout>
            <div className="max-w-lg mx-auto sm:max-w-xl">
              <div className="bg-white sm:px-4 m-4 p-10 rounded-md">
                <h1>Rats! We could not find that page.</h1>
                <div className="p-2">
                  This happens sometimes. We do not have all college teams in our database.
                  We continually work to gather more and more data.
                </div>
                <div className="p-2">
                  If you feel like we are missing something important (we probably are),
                  drop us an email at <Link href="mailto:hello@footballstarts.in">hello.footballstarts.in</Link>
                  </div>
              </div>
            </div>
          </Layout>
        </>
    );
}
