import { Button, Form, Input, Modal } from "antd";
import React from "react";

interface RegistrationModalProps {
  user?: string;
}

type RegistrationModalCompoent = React.FC<RegistrationModalProps>;

const RegistrationModal: RegistrationModalCompoent = ({ user }) => {
  const [isVisible, setIsVisible] = React.useState(!user);

  const handleFinish = (values: any) => {
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        setIsVisible(false);
      })
      .catch((error) => console.log("Error", error));
  };

  return (
    <Modal title="Login" footer={null} visible={isVisible} closable={false}>
      <Form onFinish={handleFinish}>
        <Form.Item
          label="Nome"
          name="user"
          rules={[{ required: true, message: "Inserire un nome!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Inizia
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default RegistrationModal;
