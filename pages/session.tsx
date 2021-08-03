import { GetServerSideProps } from "next";
import React from "react";
import withSession from "../lib/session";

interface SessionPageProps {}

const SessionPage: React.FC<SessionPageProps> = ({}) => {
  return <h1>Session</h1>;
};

export const getServerSideProps = withSession(async function ({ req, res }) {
  req.session.set("test", "hello world");
  await req.session.save();
  return { props: {} };
});

export default SessionPage;
