import { connectToDatabase } from "../lib/mongodb";
import { Db } from "mongodb";

import data from "../data";
import { Quiz, User } from "../types";

interface Contestant {
  user: User;
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

const connectToBothCollections = async () => {
  const { db }: { db: Db } = await connectToDatabase();
  const [answers, scores] = await Promise.all([
    db.collection("answers"),
    db.collection("score"),
  ]);
  return { scores, answers };
};

export const Register = async (user: User) => {
  const collection = await connectToCollection();
  await collection.insertOne({ user: user, answers: {} });
};

export const StartQuiz = async (user: User, quiz: string) => {
  const collection = await connectToCollection();
  await collection.updateOne({ user }, { $set: { [`answers.${quiz}`]: {} } });
};

export const CountUsers = async () => {
  const collection = await connectToCollection();
  return await collection.countDocuments();
};

export const SaveAnswer = async (
  user: User,
  quiz: string,
  question: number,
  answer: number | boolean | string[],
) => {
  const collection = await connectToCollection();
  await collection.updateOne(
    { user },
    { $set: { [`answers.${quiz}.${question}`]: answer } },
  );
};

export const GetQuizAnswers = async (user: User, quiz: string) => {
  const collection = await connectToCollection();
  const result = (await collection.findOne({ user: user })) as Contestant;
  return result.answers?.[quiz];
};

export const SaveQuizScore = async (
  user: User,
  quiz: string,
  score: number,
) => {
  const { answers, scores } = await connectToBothCollections();
  // TODO: check if already inserted
  await Promise.all([
    answers.updateOne(
      { user: user },
      { $set: { [`answers.${quiz}.score`]: score } },
    ),
    scores.updateOne(
      { quiz: quiz },
      { $push: { scores: { user: user, score: score } } },
    ),
  ]);
};
export interface Ladder {
  quiz: string;
  scores: Score[];
}
export interface Score {
  user: User;
  score: number;
}
export const GetQuizLadder = async (quiz: string) => {
  const { scores } = await connectToBothCollections();
  const result = (await scores.findOne({ quiz: quiz })) as Ladder;
  return result.scores as Score[];
};

export const Reset = async () => {
  const { answers, scores } = await connectToBothCollections();
  scores.deleteMany({});
  const myth_list = data.map((quiz: Quiz) => {
    return { quiz: quiz.slug, scores: [] };
  });
  myth_list.push({ quiz: "total", scores: [] });
  await answers.deleteMany({});
  await scores.insertMany(myth_list);
};

export const GetCheckpoint = async (user: User, quiz: string) => {
  const collection = await connectToCollection();
  const result = (await collection.findOne({ user: user })) as Contestant;
  if (result.answers !== undefined && quiz in result.answers) {
    return Object.keys(result.answers[quiz]).length;
  }
  return 0;
};
