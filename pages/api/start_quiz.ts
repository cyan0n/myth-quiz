import { StartQuiz } from "../../services/ContestantService";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.post<NextApiRequest, NextApiResponse>(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { user, quiz } = req.body;
    console.log(user, quiz);
    await StartQuiz(user, quiz);
    res.status(200).json({ hello: "world" });
  }
);

export default handler;
