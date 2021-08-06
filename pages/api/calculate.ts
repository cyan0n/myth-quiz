import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import {
  GetQuizAnswers,
  SaveQuizScore,
} from "../../services/ContestantService";
import { GetQuizByName } from "../../services/QuizService";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.post<NextApiRequest, NextApiResponse>(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { user, quiz } = req.body;
    const answers = await GetQuizAnswers(user, quiz);
    const questions = await GetQuizByName(quiz);
    let score = 0;
    questions.quiz.forEach((question, question_Idx) => {
      if (
        answers &&
        JSON.stringify(question.answer) ===
          JSON.stringify(answers[question_Idx])
      ) {
        score++;
      }
    });
    await SaveQuizScore(user, quiz, score);
    res.status(200).json({ score });
  },
);

export default handler;
