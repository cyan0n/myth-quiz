import { connectToDatabase } from "../lib/mongodb";
import { Db } from "mongodb";

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
