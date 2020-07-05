import { NextApiRequest, NextApiResponse } from 'next';

export default function getAllEvents(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //method là mấy cái GET, PUT, POST, DELETE
  if (req.method !== 'GET') {
    res.status(500).json({ message: 'Sorry, we only accept GET request' });
  }
  res.json({ hello: 'world', method: req.method });
}
