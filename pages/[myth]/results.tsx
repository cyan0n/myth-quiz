import { Space, Tabs } from "antd";
import React from "react";
import PageLayout from "../../components/PageLayout";
import { GetQuizLadder, Score } from "../../services/ContestantService";
import withSession from "../../lib/session";

export interface MythResultsProps {
  ladder: Score[];
  user: string;
}
type MythResultsComponent = React.FC<MythResultsProps>;

const MythResults: MythResultsComponent = ({ ladder, user }) => {
  const personal = ladder.find((score) => score.user == user);
  return (
    <PageLayout>
      <Tabs defaultActiveKey="1" type="card" size="large">
        <Tabs.TabPane tab="Score" key="1">
          {personal?.score}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Ladder" key="2">
          <h1>Results</h1>
          {ladder.map((score) => (
            <h1 key={score.user}>
              {score.user}: {score.score}
            </h1>
          ))}
        </Tabs.TabPane>
      </Tabs>
      <Space direction="vertical"></Space>
    </PageLayout>
  );
};

export const getServerSideProps = withSession(
  async ({ req, res, params: { myth } }) => {
    const user = req.session.get("user");
    if (user) {
      const ladder = (await GetQuizLadder(myth)).sort(
        (a, b) => b.score - a.score,
      );
      return { props: { ladder, user } };
    } else {
      // TODO: redirect to quiz page
      return { props: {} };
    }
  },
);
export default MythResults;
