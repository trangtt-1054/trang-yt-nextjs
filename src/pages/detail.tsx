import Link from 'next/link';

const people = [
  { v: 'car', name: 'trang' },
  { v: 'bike', name: 'minh' },
  { v: 'motorbike', name: 'keanu' },
];

const Detail = () => {
  return (
    <div>
      {people.map((el) => (
        <div>
          <Link as={`/${el.v}/${el.name}`} href='/[vehicle]/[person]'>
            <a>
              NAVIGATE TO {el.name}'s {el.v}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Detail;
