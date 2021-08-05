import { Space } from "antd";
import React from "react";
import PageLayout from "../../components/PageLayout";

export interface MythResultsProps {}
type MythResultsComponent = React.FC<MythResultsProps>;

const MythResults: MythResultsComponent = ({}) => {
  return (
    <PageLayout>
      <Space direction="vertical">
        <h1>Results</h1>
      </Space>
    </PageLayout>
  );
};

export default MythResults;
