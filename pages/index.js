import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Choosing Cybersecurity as my specialized IT path was driven by the overwhelming rise in complex cyber threats facing critical infrastructure and personal data globally. As organizations rapidly digitize, the expandingly vast attack surface has transformed digital security from a secondary precaution into a fundamental business requirement. I became truly passionate about this domain after observing how single data breaches can disrupt supply chains, compromise financial systems, and shatter public trust overnight. Preventing these malicious intrusions presents a high-stakes, real-world puzzle that constantly challenges me to think dynamically and stay ahead of bad actors. Moreover, the industry's severe skills shortage means that skilled security professionals are directly positioned to safeguard vital assets in an increasingly connected world. Continuous advancements in artificial intelligence and automation also keep the threat landscape evolving, ensuring that the learning process never becomes stagnant. Protecting people’s digital identities and keeping networks resilient under stress gives my technical work a clear and meaningful purpose. Ultimately, this specialization allows me to blend creative problem-solving with analytical rigour to build safer digital spaces for everyone.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}