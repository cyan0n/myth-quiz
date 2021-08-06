import { Space, Typography } from "antd";
import Table, { ColumnGroupType, ColumnsType } from "antd/lib/table";
import { DefaultRecordType } from "rc-table/lib/interface";
import React from "react";
import { Score } from "../services/ContestantService";

export interface LeaderBoardProps {
  ladder: Score[];
}
type LeaderBoardComponent = React.FC<LeaderBoardProps>;
const pad = (num: number) => {
  var s = "000" + num;
  return s.substr(s.length - 3);
};
const columns: ColumnsType<DefaultRecordType> = [
  {
    title: "Giocatore",
    dataIndex: "user",
    key: "user_id",
    render: (user) => (
      <Space
        direction="horizontal"
        size="small"
        style={{ justifyContent: "space-between", width: "100%" }}
      >
        <Typography.Text strong>{user.name}</Typography.Text>
        <Typography.Text type="secondary">#{pad(user.id)}</Typography.Text>
      </Space>
    ),
  },
  {
    title: "Punteggio",
    dataIndex: "score",
    key: "score",
    align: "right",
  },
];

const LeaderBoard: LeaderBoardComponent = ({ ladder }) => {
  const dataSource = ladder.map(({ user, score }) => {
    return { user, score, user_id: `${user.name}#${user.id}` };
  });
  return (
    <Table columns={columns} dataSource={ladder} pagination={false}></Table>
  );
};

export default LeaderBoard;
