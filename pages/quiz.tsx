import React from "react";
import PageLayout from "../components/PageLayout";
import StepsNumbersHorizontal from "../components/steps/stepsNumbersHorizontal";

interface QuizProps {}

const Quiz: React.FC<QuizProps> = ({}) => {
  return (
    <PageLayout>
      <StepsNumbersHorizontal />
    </PageLayout>
  );
};

export default Quiz;
