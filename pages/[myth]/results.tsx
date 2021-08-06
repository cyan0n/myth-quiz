import { Space, Tabs } from "antd";
import React from "react";
import PageLayout from "../../components/PageLayout";
import { GetQuizLadder, Score } from "../../services/ContestantService";
import withSession from "../../lib/session";
import { User } from "../../types";

export interface MythResultsProps {
  ladder: Score[];
  user: User;
}
type MythResultsComponent = React.FC<MythResultsProps>;

const MythResults: MythResultsComponent = ({ ladder, user }) => {
  const personal = ladder.find(
    (score) => JSON.stringify(score.user) == JSON.stringify(user),
  );
  return (
    <PageLayout>
      <Tabs defaultActiveKey="1" type="card" size="large">
        <Tabs.TabPane tab="Score" key="1">
          {personal?.score}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Ladder" key="2">
          <h1>Results</h1>
          {ladder.map((score) => (
            <h1 key={score.user.id}>
              {score.user.name}: {score.score}
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
    const user: User | undefined = req.session.get("user");
    if (user) {
      const ladder = await GetQuizLadder(myth);
      return { props: { ladder, user } };
    } else {
      // TODO: redirect to quiz page
      return { props: {} };
    }
  },
);
export default MythResults;
