import React from "react";
import PageLayout from "../components/PageLayout";
import withSession from "../lib/session";
import { GetQuizLadder, Score } from "../services/ContestantService";
import { User } from "../types";

export interface LadderPageProps {
  user: User;
  ladder: Score[];
}
export type LadderPageComponent = React.FC<LadderPageProps>;

const LadderPage: LadderPageComponent = ({ user, ladder }) => {
  const personal = ladder.find(
    (score) => JSON.stringify(score.user) == JSON.stringify(user),
  );
  return <PageLayout>Ladder {personal?.score}</PageLayout>;
};

export const getServerSideProps = withSession(async ({ req, res }) => {
  const user: User | undefined = req.session.get("user");
  if (user) {
    const ladder = await GetQuizLadder("total");
    return { props: { ladder, user } };
  } else {
    // TODO:redirect to explenation page
    return { props: {} };
  }
});

export default LadderPage;
