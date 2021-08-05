import withSession from "../../lib/session";

export default withSession(async ({ req, res }) => {
  const { user } = await req.body;
  req.session.set("user", user);
  await req.session.save();
  res.json({ user });
});
