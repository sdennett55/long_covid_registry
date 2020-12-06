import { useEffect, useState } from 'react';
import Page from '../components/Page';
import PageTitle from '../components/PageTitle';
import axios from 'axios';
import LoadingIcon from '../components/LoadingIcon';

export default function Data(props) {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState('');
  useEffect(async () => {
    const endpoint = '/api/getPublicInfo'; // @todo: add whatever endpoint vercel provides
    axios.post(endpoint).then(res => {
      if (res.status === 200 && res.data) {
        setError('');
        setUsers(res.data);
      } else {
        setError(res.data);
      }
    })
  }, [])
  return (
    <>
      <style>
        {`
          body {
            overflow-x: hidden;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
          }
          .Table {
            max-width: 1400px;
            margin: 0 auto;
            text-align: left;
            overflow: auto;
            overflow-y: hidden;
          }
          .Table-symptoms {
            min-width: 320px;
          }
          .Table-preexistingConditions {
            min-width: 200px;
          }
          .Table-bloodType {
            min-width: 125px;
          }
          .Table-vitamins {
            min-width: 130px;
          }
          thead td {
            background-color: #000;
            color: #fff;
          }
          thead tr td:first-child {
            border-radius: 8px 0 0 0;
          }
          thead tr td:last-child {
            border-radius: 0 8px 0 0;
          }
          tbody tr:nth-child(2n + 2) td {
            background: rgba(128, 128, 128, .28);
          }
          td {
            padding: .5em 1em;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
            max-height: 100px;
            overflow: auto;
          }
          ul li {
            margin: .5em 0;
          }
        `}
      </style>
      <Page headTitle="Long COVID Registry | Data">
        <PageTitle>
          Long COVID Survey Data
        </PageTitle>
        <div className="Table">
          <table>
            <thead>
              <tr>
                <td>Age</td>
                <td>Start Date</td>
                <td>Weeks Lasted</td>
                <td>Sex</td>
                <td>Blood Type</td>
                <td>Location</td>
                <td>Vitamin C/D</td>
                <td>Preexisting Conditions</td>
                <td>Symptoms</td>
              </tr>
            </thead>
            <tbody>
              {users && users.map(({ preexistingConditions, age, startDate, weeksLasted, sex, bloodType, location, vitamins, symptoms }) => (
                <tr>
                  <td>{age}</td>
                  <td>{new Date(startDate).toLocaleDateString()}</td>
                  <td>{weeksLasted || 'Ongoing'}</td>
                  <td>{sex}</td>
                  <td className="Table-bloodType">{bloodType}</td>
                  <td>{location}</td>
                  <td className="Table-vitamins">{vitamins}</td>
                  <td className="Table-preexistingConditions">
                    {preexistingConditions?.length > 0 && preexistingConditions[0] ? (
                      <ul>
                        {preexistingConditions.map(condition => (
                          <li>{condition}</li>
                        ))}
                      </ul>
                    ) : 'None'}
                  </td>
                  <td className="Table-symptoms">{symptoms}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {!users && (
            <LoadingIcon />
          )}
          {users && users.length < 1 && (
            <p style={{ textAlign: 'center' }}>No data available at this time.</p>
          )}
          {error && (
            <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>
          )}
        </div>
      </Page>
    </>
  )
}