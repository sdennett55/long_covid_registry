import Head from 'next/head'
import GoogleFonts from 'next-google-fonts';
import styles from '../styles/Page.module.css'

const Page = ({ children, headTitle }) => {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&display=swap" />
      <link rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true" />
      <Head>
        <title>{headTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header className={styles.header}>
          <a href="/" className={styles.logoWrap}>
            <span className={styles.longText}>Long</span>
            <span className={styles.covidText}>COVID</span>
            <span className={styles.registryText}>Registry</span>
          </a>
        </header>
        <div className={styles.container}>
          {children}
        </div>
      </div>
      <footer className={styles.footer}>
        <p className={styles.footerText}>The data collected in the survey is anonymously sourced and unverified. Personal contact information is submitted optionally and available to interested educational or government agencies.</p>
      </footer>
    </>
  );
}

export default Page;