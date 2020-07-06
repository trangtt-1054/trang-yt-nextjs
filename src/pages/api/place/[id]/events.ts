import { NextApiRequest, NextApiResponse } from "next";

export default function getEventByPlaceId(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json({ byId: req.query.id, message: "getVehicleById" });
}
