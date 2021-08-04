import { connectToDatabase } from "../lib/mongodb";
import { ObjectId, Db } from "mongodb";
import { Question, Quiz } from "../types";

import data from "../data";

const connectToCollection = async () => {
  const { db }: { db: Db } = await connectToDatabase();
  return db.collection("quizzes");
};

export const SyncQuiz = async () => {
  const collection = await connectToCollection();
  collection.deleteMany({});
  collection.insertMany(data, (err, result) => {
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
    slug: new RegExp(`^${name}$`, "i"),
  });
  return JSON.parse(JSON.stringify(result)) as Quiz;
};

export const GetLocalQuizByName = (name: string) => {
  return require("../data/" + name);
};
