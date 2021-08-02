import { GetAllQuizzes } from "../../services/QuizService";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get<NextApiRequest, NextApiResponse>(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const result = await GetAllQuizzes();
    res.status(200).json(result);
  },
);

export default handler;
