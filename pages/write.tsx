import { GetServerSideProps } from "next";
import React from "react";
import withSession from "../lib/session";

interface WritePageProps {
  data: string;
}

const WritePage: React.FC<WritePageProps> = ({ data }) => {
  return <h1>Write{data}</h1>;
};

export const getServerSideProps = withSession(async function ({ req, res }) {
  const data = req.session.get("test");
  return { props: { data } };
});

export default WritePage;
