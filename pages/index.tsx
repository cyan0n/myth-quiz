import { Space, Button } from "antd";
import Layout from "../components/Layout";

import data from "../data";
import { Quiz } from "../types";

export default function Home() {
  return (
    <Layout>
      <Space direction="vertical">
        {data.map((myth: Quiz) => (
          <Button key={myth.slug} type="primary" href={myth.slug}>
            {myth.name}
          </Button>
        ))}
      </Space>
    </Layout>
  );
}
