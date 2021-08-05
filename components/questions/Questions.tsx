import { useCounter } from "ahooks";
import { Space, Steps, Card, Button } from "antd";
import React, { useEffect, useState } from "react";
import { SaveAnswer } from "../../services/ContestantService";
import { QuestionType } from "../../types";
import Question from "./Question";

export interface QuestionsProps {
  questions: QuestionType[];
  onAnswer: (question_Idx: number, answer: any) => void | Promise<void>;
}

type QuestionsComponent = React.FC<QuestionsProps>;

const Questions: QuestionsComponent = ({ questions, onAnswer }) => {
  const [step, { inc: nextStep, dec: prevStep, set: setStep }] = useCounter(0, {
    min: 0,
    max: questions.length - 1,
  });
  const [current, setCurrent] = useState<QuestionType>(questions[step]);
  const [currentValue, setCurrentValue] = useState(null);

  useEffect(() => {
    setCurrent(questions[step]);
  }, [step]);

  const handleClick = async () => {
    await onAnswer(step, currentValue);
    nextStep();
  };

  return (
    <Space direction="vertical">
      <Steps current={step} progressDot size="default">
        {[...Array(questions.length)].map((_, i) => (
          <Steps.Step key={`step_${i}`} onClick={() => setStep(i)} />
        ))}
      </Steps>
      <Card
        actions={[
          <Button type="primary" onClick={handleClick}>
            Next
          </Button>,
        ]}
      >
        <Question question={current} onChange={setCurrentValue} />
      </Card>
    </Space>
  );
};

export default Questions;
