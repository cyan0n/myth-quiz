import { Layout, Space, Typography } from "antd";
import Head from "next/head";
import { User } from "../types";

const pad = (num: number) => {
  var s = "000" + num;
  return s.substr(s.length - 3);
};

export default function PageLayout({
  className,
  children,
  user,
}: {
  className?: string;
  children: React.ReactNode;
  user: User | undefined;
}) {
  return (
    <Layout style={{ height: "100vh" }}>
      <Layout.Header>
        {user && (
          <Space direction="horizontal">
            <Typography.Title style={{ color: "white" }} level={3}>
              {user.name}
            </Typography.Title>
            <Typography.Title level={5} style={{ color: "#aaa" }}>
              # {pad(user.id)}
            </Typography.Title>
          </Space>
        )}
      </Layout.Header>
      <Layout.Content
        style={{
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Space direction="vertical" align="center">
          {children}
        </Space>
      </Layout.Content>
    </Layout>
  );
}
