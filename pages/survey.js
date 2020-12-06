
import { useState } from 'react';
import Page from '../components/Page';
import PageTitle from '../components/PageTitle';
import BodyText from '../components/BodyText';
import Form from '../components/Form';
import FormSection from '../components/FormSection';
import TextArea from '../components/TextArea';
import LinkButton from '../components/LinkButton';
import InlineLink from '../components/InlineLink';
import axios from 'axios';
import styles from '../styles/Survey.module.css'

const initialState = {
  dob: '',
  startDate: '',
  weeksLasted: 0,
  sex: '',
  bloodType: '',
  location: '',
  vitamins: '',
  preexistingConditions: [],
  symptoms: '',
  email: '',
};

export default function Survey() {
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const updateState = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  };
  const handleSelectedOptions = (e) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setState({ ...state, [e.target.name]: value })
  };
  const handleSubmit = e => {
    e.preventDefault();

    setIsLoading(true);

    const newState = {...state, dateModified: new Date().toISOString().split('T')[0]}

    // Send newState to endpoint that saves User to database.
    axios.post('/api/addUser', newState).then(res => {
      setIsLoading(false);
      if (res.status === 200 && res.data) {
        setError('');
        setIsSuccess(true);
        console.log('success!', res);
      } else {
        setError(res.data);
        setIsSuccess(false);
      }
    });
  };

  return (
    <Page headTitle="Long COVID Registry | Survey">
      {isSuccess ? (
        <>
          <PageTitle>
            Thank you!
          </PageTitle>
          <BodyText className={styles.bodyText}>Thank you for taking the survey! Please navigate here if you'd like to see <InlineLink href="/data">the data so far.</InlineLink></BodyText>
        </>
      ) : (
          <>
            <PageTitle>
              Long COVID Survey
      </PageTitle>
            <BodyText className={styles.bodyText}>The survey will take only a few minutes. Please provide as much detail as possible in the symptoms section at the very bottom!</BodyText>
            <Form onSubmit={handleSubmit}>
              <FormSection title="What is your date of birth?" subtitle="Only your age will be visible">
                <input type="date" required name="dob" onChange={updateState} max={new Date().toISOString().split("T")[0]} />
              </FormSection>
              <FormSection title="When did your symptoms first start?">
                <input type="date" name="startDate" required onChange={updateState} max={new Date().toISOString().split("T")[0]} />
              </FormSection>
              <FormSection title="How many weeks until your symptoms subsided?" subtitle="Leave it at zero if you still have symptoms">
                <input type="number" min="0" name="weeksLasted" required onChange={updateState} value={state.weeksLasted} />
              </FormSection>
              <FormSection title="What is your sex?">
                <select name="sex" required onChange={updateState}>
                  <option value=""></option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
              </FormSection>
              <FormSection title="What is your blood type?">
                <select name="bloodType" required onChange={updateState}>
                  <option value=""></option>
                  <option value="O negative">O negative</option>
                  <option value="O positive">O positive</option>
                  <option value="A negative">A negative</option>
                  <option value="A positive">A positive</option>
                  <option value="B negative">B negative</option>
                  <option value="B positive">B positive</option>
                  <option value="AB negative">AB negative</option>
                  <option value="AB positive">AB positive</option>
                  <option value={`I'm not sure`}>I'm not sure</option>
                </select>
              </FormSection>
              <FormSection title="Where do you live?" subtitle="Please provide city, state (if applicable), and country. e.g. Boston, MA, USA.">
                <input name="location" type="text" required onChange={updateState} />
              </FormSection>
              <FormSection title="Have you taken Vitamin C or D supplements since your symptoms began?">
                <select name="vitamins" required onChange={updateState}>
                  <option value=""></option>
                  <option value="Vitamin C">Vitamin C</option>
                  <option value="Vitamin D">Vitamin D</option>
                  <option value="Both">Both</option>
                  <option value="Neither">Neither</option>
                </select>
              </FormSection>
              <FormSection title="Do you have any pre-existing conditions?" subtitle={`If not, select "None." Hold shift to select multiple.`}>
                <select name="preexistingConditions" size="12" multiple required onChange={handleSelectedOptions}>
                  <option value="">None</option>
                  <option value="Cancer">Cancer</option>
                  <option value="Chronic kidney disease">Chronic kidney disease</option>
                  <option value="COPD">COPD</option>
                  <option value="Heart conditions">Heart conditions</option>
                  <option value="Immunocompromised state">Immunocompromised state</option>
                  <option value="Obesity">Obesity</option>
                  <option value="Severe Obesity">Severe Obesity (BMI ≥ 40 kg/m2)</option>
                  <option value="Pregnancy">Pregnancy</option>
                  <option value="Sickle cell disease">Sickle cell disease</option>
                  <option value="Smoking">Smoking</option>
                  <option value="Type 2 diabetes">Type 2 diabetes</option>
                </select>
              </FormSection>
              <FormSection title="Please describe your symptoms" subtitle="Be as specific as possible!">
                <TextArea required name="symptoms" onChange={updateState} />
              </FormSection>
              <FormSection title="What is your email in case an educational or goverment agency wants to contact you?" subtitle="Not accessible or visible to the public">
                <input name="email" type="email" onChange={updateState} />
              </FormSection>
              {error && (
                <p style={{ color: 'red' }}>{error}</p>
              )}
              <LinkButton disabled={isLoading}>Submit</LinkButton>
            </Form>
          </>
        )}
    </Page>
  )
}