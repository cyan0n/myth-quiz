import { Space, Tabs, Typography } from "antd";
import React from "react";
import LeaderBoard from "../components/LeaderBoard";
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
  return (
    <PageLayout>
      <Tabs
        centered
        defaultActiveKey="1"
        type="card"
        size="large"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Tabs.TabPane tab="Score" key="1" style={{ textAlign: "center" }}>
          <Typography.Title level={3}>
            Il tuo punteggio finale é:
          </Typography.Title>
          <Typography.Title>
            {personal?.score}
            <Typography.Title level={3}>su</Typography.Title>6
          </Typography.Title>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Ladder" key="2" style={{ textAlign: "center" }}>
          <Space direction="vertical">
            <Typography.Title level={3}>Classifica</Typography.Title>
            <LeaderBoard ladder={ladder} />
          </Space>
        </Tabs.TabPane>
      </Tabs>
    </PageLayout>
  );
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
