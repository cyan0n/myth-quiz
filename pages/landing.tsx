import { Button, Form, Input } from "antd";
import React from "react";
import Layout from "../components/Layout";

interface LandingProps {}

const Landing: React.FC<LandingProps> = ({}) => {
  return (
    <Layout>
      <Form>
        <Form.Item
          label="Nome"
          name="name"
          rules={[{ required: true, message: "Inserire un nome!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Inzia!
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default Landing;
