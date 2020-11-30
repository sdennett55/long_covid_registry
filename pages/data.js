export default function Data(props) {
  return (
    <h1>Whatup? {JSON.stringify(props.users)}</h1>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3000/api/test');
  const users = await res.json();
  return {
    props: {users}, // will be passed to the page component as props
  }
}