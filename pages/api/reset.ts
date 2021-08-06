import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { Reset } from "../../services/ContestantService";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get<NextApiRequest, NextApiResponse>(
  async (req: NextApiRequest, res: NextApiResponse) => {
    await Reset();
    res.status(200).json({ success: true });
  },
);

export default handler;
