import { connectToDatabase } from "../lib/mongodb";
import { ObjectId, Db } from "mongodb";

import quiz from "../docs/quiz";

const collection_name = "quizzes";

export const SyncQuiz = async () => {
  const { db }: { db: Db } = await connectToDatabase();
  const collection = db.collection(collection_name);
  collection.deleteMany({});
  collection.insertMany(quiz, (err, result) => {
    if (err) throw err;
    return result?.insertedCount;
  });
};

export const GetAllQuizzes = async () => {
  const { db }: { db: Db } = await connectToDatabase();
  return db.collection(collection_name).find({}).toArray();
};
