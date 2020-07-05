import Link from 'next/link';

export default function List({ resList }) {
  //console.log(resList);
  return (
    <div>
      {resList &&
        resList.map((e, i) => (
          <div key={i}>
            <Link as={`/${e.event_date_unix}/${e.id}`} href='/[date]/[id]'>
              <a>{e.title}</a>
            </Link>
          </div>
        ))}
    </div>
  );
}

List.getInitialProps = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/history');
  const resList = await response.json();
  return { resList };
};
