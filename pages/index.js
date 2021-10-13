import Image from 'next/image';
import Layout from '../components/layout.js';
import Countdown from '../components/countdown.js';
import About from '../components/about.js';
import { getThisWeeksSchedule } from '../lib/schedule.js';
import styles from '../styles/Home.module.css';

export async function getStaticProps() {
  const schedule = getThisWeeksSchedule();
  return {
    props: { schedule }
  };
}

export default function Home({schedule}) {
  return (
    <Layout>
    <div className={styles.container}>
      <Countdown />
      <pre>
        {schedule.map(t => t.team)}
      </pre>

    </div>
      <About />
    </Layout>
  )
}
