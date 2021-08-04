import { Button, Form, Image, Input, Modal, Typography } from "antd";
import React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import RegistrationModal from "../../components/RegistrationModal";
import withSession from "../../lib/session";
import { GetQuizByName } from "../../services/QuizService";
import { Quiz } from "../../types";
import Questions from "../../components/questions/Questions";

interface LandingProps {
  user?: string;
  quiz: Quiz;
}

const Landing: React.FC<LandingProps> = ({ user, quiz }) => {
  const router = useRouter();
  const { myth } = router.query;

  return (
    <Layout>
      <Typography.Title>{quiz.name}</Typography.Title>
      <Typography.Text>{quiz.description}</Typography.Text>
      <Image
        width={200}
        src="/images/chimera.jpeg"
        style={{ borderRadius: "100%" }}
      />
      <Questions questions={quiz.quiz} />
      <RegistrationModal user={user} />
    </Layout>
  );
};

export const getServerSideProps = withSession(async function ({
  req,
  res,
  params: { myth },
}) {
  const quiz = await GetQuizByName(myth);
  const props: LandingProps = {
    quiz,
  };
  const user = req.session.get("user");

  if (user) {
    props.user = user;
  }

  return { props };
});

export default Landing;
