import { GetQuizByName } from "../../services/QuizService";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get<NextApiRequest, NextApiResponse>(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { name } = req.query;
    const result = await GetQuizByName(name as string);
    res.status(200).json(result);
  },
);

export default handler;
