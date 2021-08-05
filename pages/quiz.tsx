import React from "react";
import Layout from "../components/Layout";
import StepsNumbersHorizontal from "../components/steps/stepsNumbersHorizontal";

interface QuizProps {}

const Quiz: React.FC<QuizProps> = ({}) => {
  return (
    <Layout>
      <StepsNumbersHorizontal />
    </Layout>
  );
};

export default Quiz;
