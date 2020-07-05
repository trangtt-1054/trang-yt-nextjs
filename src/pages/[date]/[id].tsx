import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { HistoryEvent } from '../../../api/HistoryEvent';
import { NextPageContext } from 'next';

export interface UserProps {
  res: HistoryEvent | undefined;
}

export default function User({ res }: UserProps) {
  const router = useRouter();
  const [item, setItem] = useState(res);
  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        `https://api.spacexdata.com/v3/history/${router.query.id}`
      );
      const res2: HistoryEvent | undefined = await response.json();
      setItem(res2);
    }
    if (!res) loadData(); //ở client side, nếu res chưa có thì gọi api trên, nếu res đã có từ lần gọi trước rồi thì skip ko gọi loadData nữa
  }, []);
  if (!item) return <p>Loading...</p>;
  return <h2>{item?.details}</h2>;
}

interface MyNextPageContext extends NextPageContext {
  query: {
    date: string;
    id: string;
  };
}

User.getInitialProps = async (ctx: MyNextPageContext) => {
  //if we are in client side, (res & req only available in server side) instead of calling the API before navigating to next page, we JUST navigate and then we can use similar code with useState, useEffect in order to fetch data in client-side
  if (!ctx.req) {
    return { res: null };
  }
  const { query } = ctx;
  const response = await fetch(
    `https://api.spacexdata.com/v3/history/${query.id}`
  );
  const res: HistoryEvent | undefined = await response.json();
  return { res };
};
