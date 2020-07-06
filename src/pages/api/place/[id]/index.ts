import { NextApiRequest, NextApiResponse } from "next";

export default function getEventById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json({ byId: req.query.id, message: "getVehicleById" });
}
