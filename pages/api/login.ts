import { withApiSession } from "../../lib/session";
import { CountUsers, Register } from "../../services/ContestantService";
import { User } from "../../types";

export default withApiSession(async (req, res) => {
  // TODO: Check if user already exists
  const [id, { user }] = await Promise.all([CountUsers(), req.body]);
  const newUser: User = { name: user, id: id + 1 };
  req.session.set("user", newUser);
  await Promise.all([req.session.save(), Register(newUser)]);
  res.json({ user: newUser });
});
