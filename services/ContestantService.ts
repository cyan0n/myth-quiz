import { connectToDatabase } from "../lib/mongodb";
import { Db } from "mongodb";

interface Contestant {
  user: string;
  answers?: {
    [key: string]: {
      [key: number]: number | boolean | string[];
    };
  };
}

const connectToCollection = async () => {
  const { db }: { db: Db } = await connectToDatabase();
  return db.collection("answers");
};

export const Register = async (user: string) => {
  const collection = await connectToCollection();
  await collection.insertOne({ user: user, answers: {} });
};

export const StartQuiz = async (user: string, quiz: string) => {
  const collection = await connectToCollection();
  await collection.updateOne(
    { user: user },
    { $set: { [`answers.${quiz}`]: {} } },
  );
};

export const SaveAnswer = async (
  user: string,
  quiz: string,
  question: number,
  answer: number | boolean | string[],
) => {
  const collection = await connectToCollection();
  await collection.updateOne(
    { user: user },
    { $set: { [`answers.${quiz}.${question}`]: answer } },
  );
};

export const GetCheckpoint = async (user: string, quiz: string) => {
  const collection = await connectToCollection();
  const result = (await collection.findOne({ user: user })) as Contestant;
  if (result.answers !== undefined && quiz in result.answers) {
    return Object.keys(result.answers[quiz]).length;
  }
  return 0;
};
