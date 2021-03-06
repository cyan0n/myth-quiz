import { Button, Form, Image, Input, Modal, Typography } from "antd";
import React, { useState } from "react";
import PageLayout from "../../components/PageLayout";
import { useRouter } from "next/router";
import RegistrationModal from "../../components/RegistrationModal";
import withSession from "../../lib/session";
import { GetQuizByName } from "../../services/QuizService";
import { Quiz, User } from "../../types";
import Questions from "../../components/questions/Questions";
import { GetCheckpoint, StartQuiz } from "../../services/ContestantService";
import Api from "../../lib/api";

interface LandingProps {
  user?: User;
  quiz: Quiz;
  checkpoint?: number;
}

const Landing: React.FC<LandingProps> = ({ user, quiz, checkpoint }) => {
  const router = useRouter();
  const { myth } = router.query;
  const [_user, setUser] = useState<User | undefined>(user);

  const handleAnswer = async (question_Idx: number, answer: any) => {
    await Api.post("save_answer", {
      user: _user,
      quiz: quiz.slug,
      question: question_Idx,
      answer,
    });
  };

  const handleComplete = async () => {
    await Api.post("calculate", { user: _user, quiz: quiz.slug });
    router.push(`${myth}/results`);
  };

  const handleRegistration = (user: User) => {
    Api.post("start_quiz", { user, quiz: quiz.slug });
    setUser(user);
  };

  return (
    <PageLayout user={_user ?? undefined}>
      <Typography.Title>{quiz.name}</Typography.Title>
      <Image
        width={200}
        src={`/images/${quiz.slug}.png`}
        style={{
          borderRadius: "100%",
          borderColor: "#AC8248",
          borderStyle: "solid",
          borderWidth: ".2rem",
        }}
        preview={false}
      />
      <Questions
        questions={quiz.quiz}
        onAnswer={handleAnswer}
        checkpoint={checkpoint}
        onComplete={handleComplete}
      />
      <RegistrationModal user={user} onRegister={handleRegistration} />
    </PageLayout>
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
  const user: User | undefined = req.session.get("user");

  if (user) {
    props.user = user;
    if (quiz) {
      const checkpoint = await GetCheckpoint(user, quiz.slug);
      props.checkpoint = checkpoint;
      if (!checkpoint) {
        StartQuiz(user, quiz.slug);
      }
    }
  }

  return { props };
});

export default Landing;
