import Page from '../components/Page';
import InlineLink from '../components/InlineLink';
import LinkButton from '../components/LinkButton';
import PageTitle from '../components/PageTitle';
import BodyText from '../components/BodyText';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Page headTitle="Long COVID Registry">
      <PageTitle>
        A dedicated platform to self-report <InlineLink href="https://en.wikipedia.org/wiki/Long_Covid" openInNewTab>Long COVID</InlineLink> symptoms.
      </PageTitle>
      <BodyText maxWidth={660}>If you have tested positive for COVID-19 and have (or had) symptoms that lasted for more than a month, please take a few minutes to fill out the survey below. </BodyText>
      <BodyText maxWidth={660}>Taking the survey allows us to collect scientific data that will be invaluable to researchers, scientists, and even the general public around the world. </BodyText>
      <div className={styles.buttonWrap}>
        <LinkButton href="/survey">Take the survey</LinkButton>
        <LinkButton href="/data" color="black">See the data</LinkButton>
      </div>
    </Page>
  )
}
