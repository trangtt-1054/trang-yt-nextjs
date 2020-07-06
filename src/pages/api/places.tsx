import { NextApiRequest, NextApiResponse } from "next";

export default function getAllPlaces(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json([{ name: "Sky" }, { name: "Galaxy" }]);
}
