import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { connectToDatabase } from "../../lib/mongodb";
import { Db } from "mongodb";
import { User } from "../../types";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get<NextApiRequest, NextApiResponse>(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { db }: { db: Db } = await connectToDatabase();
    const collection = db.collection("score");

    const user: User = { name: "Thomas", id: 2 };
    const result = await collection.updateOne(
      { quiz: "total" },
      { $inc: { "scores.$[index].score": 2 } },
      {
        arrayFilters: [{ "index.user": { user } }],
      },
    );
    res.status(200).json(result);
  },
);

export default handler;
