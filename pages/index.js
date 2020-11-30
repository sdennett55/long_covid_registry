import Head from 'next/head'
import GoogleFonts from 'next-google-fonts';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&display=swap" />
      <link rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin />

      <link rel="preload"
        as="style"
        href="$CSS&display=swap" />

      <link rel="stylesheet"
        href="$CSS&display=swap"
        media="print" onload="this.media='all'" />
      <Head>
        <title>Long COVID Registry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header className={styles.header}>
          <div className={styles.logoWrap}>
            <span className={styles.longText}>Long</span>
            <span className={styles.covidText}>COVID</span>
            <span className={styles.registryText}>Registry</span>
          </div>
        </header>
        <div className={styles.container}>
          <h1 className={styles.title}>

            A dedicated platform to self-report <a className={styles.link} href="https://en.wikipedia.org/wiki/Long_Covid" target="_blank" rel="noopener noreferrer">Long COVID</a> symptoms.
        </h1>
          <p className={styles.bodyText}>If you have tested positive for COVID-19 and have (or had) symptoms that lasted for more than a month, please take a few minutes to fill out the survey below. </p>
          <p className={styles.bodyText}>Taking the survey allows us to collect scientific data that will be invaluable to researchers, scientists, and even the general public around the world. </p>
          <div className={styles.buttonWrap}>
            <Link href="/survey"><a className={styles.linkButton} type="button">Take the survey</a></Link>
            <Link href="/data"><a className={styles.linkButtonBlack} type="button">See the data</a></Link>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <p className={styles.footerText}>The data collected in the survey is anonymously sourced and unverified. Personal contact information is submitted optionally and available to interested educational or government agencies.</p>
      </footer>
    </>
  )
}
