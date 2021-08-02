import { connectToDatabase } from "../lib/mongodb";
import { ObjectId, Db } from "mongodb";
import { Question, Quiz } from "../types";

import quiz from "../docs/quiz";

const connectToCollection = async () => {
  const { db }: { db: Db } = await connectToDatabase();
  return db.collection("quizzes");
};

export const SyncQuiz = async () => {
  const collection = await connectToCollection();
  collection.deleteMany({});
  collection.insertMany(quiz, (err, result) => {
    if (err) throw err;
    return result?.insertedCount;
  });
};

export const GetAllQuizzes = async () => {
  const collection = await connectToCollection();
  const result = await collection.find({}).toArray();
  return JSON.parse(JSON.stringify(result)) as Quiz[];
};

export const GetQuizByName = async (name: string) => {
  const collection = await connectToCollection();
  const result = await collection.findOne({
    name: new RegExp(`^${name}$`, "i"),
  });
  return JSON.parse(JSON.stringify(result)) as Quiz;
};
