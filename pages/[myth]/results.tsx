import { Button, Space, Tabs, Typography } from "antd";
import React from "react";
import PageLayout from "../../components/PageLayout";
import { GetQuizLadder, Score } from "../../services/ContestantService";
import withSession from "../../lib/session";
import { User } from "../../types";
import LeaderBoard from "../../components/LeaderBoard";
import AnchorLink from "antd/lib/anchor/AnchorLink";

export interface MythResultsProps {
  ladder: Score[];
  user: User;
  quiz: string;
}
type MythResultsComponent = React.FC<MythResultsProps>;

const MythResults: MythResultsComponent = ({ ladder, user, quiz }) => {
  const personal = ladder.find(
    (score) => JSON.stringify(score.user) == JSON.stringify(user),
  );
  return (
    <PageLayout user={user}>
      <Tabs
        defaultActiveKey="1"
        type="card"
        size="large"
        style={{ width: "100vw", height: "100vh" }}
        centered
      >
        <Tabs.TabPane tab="Score" key="1" style={{ textAlign: "center" }}>
          <Typography.Title level={3}>
            Il tuo punteggio sul Quiz é:
          </Typography.Title>
          <Typography.Title>
            {personal?.score}
            <Typography.Title level={3}>su</Typography.Title>
            54
          </Typography.Title>
          <Button href="/results" type="primary">
            Risultati Globali
          </Button>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Ladder" key="2" style={{ textAlign: "center" }}>
          <Typography.Title level={3}>Classifica</Typography.Title>
          <LeaderBoard ladder={ladder} />
        </Tabs.TabPane>
      </Tabs>
      <Space direction="vertical"></Space>
    </PageLayout>
  );
};

export const getServerSideProps = withSession(
  async ({ req, res, params: { myth } }) => {
    const user: User | undefined = req.session.get("user");
    const ladder = await GetQuizLadder(myth);
    if (
      user &&
      ladder.find((score) => JSON.stringify(score.user) == JSON.stringify(user))
    ) {
      return { props: { ladder, user, quiz: myth } };
    } else {
      return { redirect: { permanent: true, destination: `/${myth}` } };
    }
  },
);
export default MythResults;
