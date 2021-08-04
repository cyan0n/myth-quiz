import { Button, Form, Input } from "antd";
import React from "react";
import Layout from "../components/Layout";

interface LandingProps {}

const Landing: React.FC<LandingProps> = ({}) => {
  return (
    <Layout> 
      <Form className="flex flex-col items-center">
      <h1 className="mt-24 text-xl text-center">Inserisci il tuo nome per partecipare alla sfida!</h1>
        <Form.Item
          label="Nome"
          name="name"
          rules={[{ required: true, message: "Inserire un nome!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Inizia!
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default Landing;
