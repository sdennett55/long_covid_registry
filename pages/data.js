import { useEffect, useState } from 'react';
import Page from '../components/Page';
import PageTitle from '../components/PageTitle';
import BodyText from '../components/BodyText';

export default function Data(props) {
  const [users, setUsers] = useState(null);
  useEffect(async () => {
    const endpoint = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/test' : '/api/test'; // @todo: add whatever endpoint vercel provides
    const res = await fetch(endpoint);
    const users = await res.json();
    setUsers(users);
  }, [])
  return (
    <>
      <Page headTitle="Long COVID Registry | Data">
        <PageTitle>
          Long COVID Survey Data
        </PageTitle>
        {users && (
          <>
            {JSON.stringify(users)}
          </>
        )}
      </Page>
    </>
  )
}