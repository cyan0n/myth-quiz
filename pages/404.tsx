import { Layout, Space, Typography } from "antd";
import React from "react";

export interface NotFoundPageProps {}

export type NotFoundPageComponent = React.FC<NotFoundPageProps>;

const NotFoundPage: NotFoundPageComponent = ({}) => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Layout.Content style={{ padding: "5rem 2rem" }}>
        <Space size="large" direction="vertical">
          <Typography.Title level={2}>Pagina non trovata!</Typography.Title>
          <Typography.Paragraph>
            Benvenuto alla sfida "il mito dei miti", se vuoi essere il mito dei
            miti dovrai dimostrare la tua conoscenza dei miti scelti per i vari
            tavoli!
          </Typography.Paragraph>
          <Typography.Paragraph>
            Leggi quindi attentamente la storia assegnata al tuo tavolo,
            scannerizza il QR-Code qui sotto, apri il link e rispondi alle varie
            domande!
          </Typography.Paragraph>
          <Typography.Paragraph>
            Per totalizzare più punti puoi completare i quiz presenti anche agli
            altri tavoli mediante i loro QR code.
          </Typography.Paragraph>
          <Typography.Paragraph>
            A fine serata chi otterrà più punti sarà incoronato mito dei miti...
            Però attento! Devi conoscere anche la mitica relazione fra Michel e
            Sabatina.
          </Typography.Paragraph>
        </Space>
      </Layout.Content>
    </Layout>
  );
};

export default NotFoundPage;
