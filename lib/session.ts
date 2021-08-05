// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { NextApiRequest, NextApiResponse } from "next";
import { Session, withIronSession } from "next-iron-session";

const { SESSION_PASS } = process.env;

// optionally add stronger typing for next-specific implementation
export type NextIronRequest = NextApiRequest & { session: Session };
export type NextIronHandler = ({
  req,
  res,
  params,
}: {
  req: NextIronRequest;
  res: NextApiResponse;
  params: any;
}) => any | Promise<any>;

const withSession = (handler: NextIronHandler) =>
  withIronSession(handler, {
    password: SESSION_PASS as string,
    cookieName: "myth-quiz-user",
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      secure: process.env.NODE_ENV === "production",
    },
  });

export default withSession;

export const withApiSession = (
  handler: (req: NextIronRequest, res: NextApiResponse) => any | Promise<any>,
) =>
  withIronSession(handler, {
    password: SESSION_PASS as string,
    cookieName: "myth-quiz-user",
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      secure: process.env.NODE_ENV === "production",
    },
  });
