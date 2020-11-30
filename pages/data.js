import {useEffect, useState} from 'react';

export default function Data(props) {
  const [users, setUsers] = useState(null);
  useEffect(async () => {
    const res = await fetch('http://localhost:3000/api/test');
    const users = await res.json();
    console.log('wtfwtfwtfw', users);
    setUsers(users);
  }, [])
  return (
    <>
      <h1>Whatup?</h1>
      {users && (
        <>
          {JSON.stringify(users)}
        </>
      )}
    </>
  )
}