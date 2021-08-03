import { Button, Form, Input, Modal, Typography } from "antd";
import React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import RegistrationModal from "../../components/RegistrationModal";
import withSession from "../../lib/session";

interface LandingProps {
  user?: string;
}

const Landing: React.FC<LandingProps> = ({ user }) => {
  const router = useRouter();
  const { myth } = router.query;

  return (
    <Layout>
      <Typography.Title>{myth}</Typography.Title>
      <RegistrationModal user={user} />
    </Layout>
  );
};

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get("user");

  if (user) {
    return { props: { user } };
  }

  return { props: {} };
});

export default Landing;
