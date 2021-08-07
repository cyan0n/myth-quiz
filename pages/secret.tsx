import { Space, Button } from "antd";
import PageLayout from "../components/PageLayout";

import data from "../data";
import { Quiz } from "../types";

export default function Home() {
  return (
    <PageLayout user={undefined}>
      <Space direction="vertical">
        {data.map((myth: Quiz) => (
          <Button key={myth.slug} type="primary" href={myth.slug}>
            {myth.name}
          </Button>
        ))}
      </Space>
    </PageLayout>
  );
}
