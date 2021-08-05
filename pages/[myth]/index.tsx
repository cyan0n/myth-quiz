import { Button, Form, Image, Input, Modal, Typography } from "antd";
import React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import RegistrationModal from "../../components/RegistrationModal";
import withSession from "../../lib/session";
import { GetQuizByName } from "../../services/QuizService";
import { Quiz } from "../../types";
import Questions from "../../components/questions/Questions";
import { SaveAnswer, StartQuiz } from "../../services/ContestantService";

interface LandingProps {
  user?: string;
  quiz: Quiz;
}

const Landing: React.FC<LandingProps> = ({ user, quiz }) => {
  const router = useRouter();
  const { myth } = router.query;

  const handleAnswer = async (question_Idx: number, answer: any) => {
    // SaveAnswer(user as string, quiz.slug, question_Idx, answer);
    await fetch("/api/save_answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user,
        quiz: quiz.slug,
        question: question_Idx,
        answer,
      }),
    });
  };

  return (
    <Layout>
      <Typography.Title>{quiz.name}</Typography.Title>
      <Image
        width={200}
        src="/images/chimera.jpeg"
        style={{ borderRadius: "100%" }}
      />
      <Questions questions={quiz.quiz} onAnswer={handleAnswer} />
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
    if (quiz) {
      // TODO: check if already started quiz
      StartQuiz(user, quiz.slug);
    }
  }

  return { props };
});

export default Landing;
