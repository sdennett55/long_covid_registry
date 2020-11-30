import Page from '../components/Page';
import PageTitle from '../components/PageTitle';
import BodyText from '../components/BodyText';
import Form from '../components/Form';
import FormSection from '../components/FormSection';
import LinkButton from '../components/LinkButton';
import styles from '../styles/Survey.module.css'

const handleSubmit = e => {
  e.preventDefault();
}

export default function Survey() {
  return (
    <Page headTitle="Long COVID Registry | Survey">
      <PageTitle>
        Long COVID Survey
      </PageTitle>
      <BodyText className={styles.bodyText}>The survey will take only a few minutes. Please provide as much detail as possible in the symptoms section at the very bottom!</BodyText>

      <Form onSubmit={handleSubmit}>
        <FormSection title="What is your date of birth?" subtitle="Only your age will be visible">
          <input type="date" />
        </FormSection>
        <FormSection title="When did your symptoms first start?">
          <input type="date" />
        </FormSection>
        <FormSection title="How many weeks until your symptoms subsided?" subtitle="Leave blank if you still have symptoms">
          <input type="number" />
        </FormSection>
        <FormSection title="What is your sex?">
          <select>
            <option>Female</option>
            <option>Male</option>
          </select>
        </FormSection>
        <FormSection title="What is your blood type?">
          <select>
            <option>O negative</option>
            <option>O positive</option>
            <option>A negative</option>
            <option>A positive</option>
            <option>B negative</option>
            <option>B positive</option>
            <option>AB negative</option>
            <option>AB positive</option>
            <option defaultValue>I'm not sure</option>
          </select>
        </FormSection>
        <FormSection title="Where do you live?" subtitle="Please provide city, state (if applicable), and country. e.g. Boston, MA, USA.">
          <input type="text" />
        </FormSection>
        <FormSection title="Have you taken Vitamin C or D supplements since your symptoms began?">
          <select>
            <option>Vitamin C</option>
            <option>Vitamin D</option>
            <option>Both</option>
            <option>Neither</option>
          </select>
        </FormSection>
        <FormSection title="Do you have any pre-existing conditions?" subtitle="Please list below. e.g. asthma, obesity, etc.">
          <select>
            <option>O negative</option>
            <option>O positive</option>
            <option>A negative</option>
            <option>A positive</option>
            <option>B negative</option>
            <option>B positive</option>
            <option>AB negative</option>
            <option>AB positive</option>
            <option defaultValue>I'm not sure</option>
          </select>
        </FormSection>
        <FormSection title="Please describe your symptoms" subtitle="Be as specific as possible!">
          <textarea></textarea>
        </FormSection>
        <LinkButton>Submit</LinkButton>
      </Form>
    </Page>
  )
}