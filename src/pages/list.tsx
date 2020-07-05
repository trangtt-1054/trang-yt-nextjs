import Link from 'next/link';
import { HistoryEvent } from '../../api/HistoryEvent';

export interface ListProps {
  resList: HistoryEvent[] | undefined;
}

export default function List({ resList }: ListProps) {
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
  const resList: HistoryEvent[] | undefined = await response.json();
  return { resList };
};
