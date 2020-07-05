import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function User({ res }) {
  const router = useRouter();
  const [item, setItem] = useState(res);
  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        `https://api.spacexdata.com/v3/history/${router.query.id}`
      );
      const res2 = await response.json();
      setItem(res2);
    }
    if (!res) loadData(); //ở client side, nếu res chưa có thì gọi api trên, nếu res đã có từ lần gọi trước rồi thì skip ko gọi loadData nữa
  }, []);
  if (!item) return <p>Loading...</p>;
  return <h2>{item?.details}</h2>;
}

User.getInitialProps = async (ctx) => {
  //if we are in client side, (res & req only available in server side) instead of calling the API before navigating to next page, we JUST navigate and then we can use similar code with useState, useEffect in order to fetch data in client-side
  if (!ctx.req) {
    return { res: null };
  }
  const { query } = ctx;
  const response = await fetch(
    `https://api.spacexdata.com/v3/history/${query.id}`
  );
  const res = await response.json();
  return { res };
};
