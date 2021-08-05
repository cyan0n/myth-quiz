import { withApiSession } from "../../lib/session";

export default withApiSession(async (req, res) => {
  req.session.destroy();
  res.status(200).json({});
});
