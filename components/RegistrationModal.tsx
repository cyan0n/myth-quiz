import { Button, Form, Input, Modal } from "antd";
import React from "react";
import Api from "../lib/api";
import { User } from "../types";

interface RegistrationModalProps {
  user?: User;
  onRegister: (user: User) => void;
}

type RegistrationModalCompoent = React.FC<RegistrationModalProps>;

const RegistrationModal: RegistrationModalCompoent = ({ user, onRegister }) => {
  const [isVisible, setIsVisible] = React.useState(!user);

  const handleFinish = (values: { user: string }) => {
    Api.post("login", values)
      .then((response) => {
        setIsVisible(false);
        onRegister(response.user);
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
        <Form.Item style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit">
            Inizia
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default RegistrationModal;
