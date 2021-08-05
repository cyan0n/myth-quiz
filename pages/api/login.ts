import { withApiSession } from "../../lib/session";
import { Register } from "../../services/ContestantService";

export default withApiSession(async (req, res) => {
  const { user } = await req.body;
  req.session.set("user", user);
  await req.session.save();
  await Register(user);
  res.json({ user });
});
