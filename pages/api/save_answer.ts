import { SaveAnswer } from "../../services/ContestantService";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.post<NextApiRequest, NextApiResponse>(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { user, quiz, question, answer } = req.body;
    await SaveAnswer(user, quiz, question, answer);
    res.status(200).json({ hello: "world" });
  },
);

export default handler;
