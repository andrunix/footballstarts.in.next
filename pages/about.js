import Link from 'next/link';
import Layout from '../components/layout.js';

export default function About() {
  return (
    <Layout>
      <div className="container">
        <h1>About FootballStarts.in</h1>
        <div>
          
        </div>
        <div>
          Please contact us by <a href="mailto:hello@footballstarts.in">email</a> if you have
          any questions about our privacy poicy or information we hold about you.
        </div>
      </div>
    </Layout>
  );
}
