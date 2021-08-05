import { Layout, Space } from "antd";
import Head from "next/head";

export default function PageLayout({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Layout style={{ height: "100vh" }}>
      <Layout.Header>Header</Layout.Header>
      <Layout.Content style={{ display: "flex", justifyContent: "center" }}>
        <Space direction="vertical" align="center">
          {children}
        </Space>
      </Layout.Content>
    </Layout>
  );
}
