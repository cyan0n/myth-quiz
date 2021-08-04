import { useCounter } from "ahooks";
import { Space, Steps, Card, Button } from "antd";
import React, { useEffect, useState } from "react";
import { QuestionType } from "../../types";
import Question from "./Question";

export interface QuestionsProps {
  questions: QuestionType[];
}

type QuestionsComponent = React.FC<QuestionsProps>;

const Questions: QuestionsComponent = ({ questions }) => {
  const [step, { inc: nextStep, dec: prevStep, set: setStep }] = useCounter(0, {
    min: 0,
    max: questions.length - 1,
  });
  const [current, setCurrent] = useState<QuestionType>(questions[step]);

  useEffect(() => {
    setCurrent(questions[step]);
  }, [step]);

  return (
    <Space direction="vertical">
      <Steps current={step} progressDot size="default">
        {[...Array(questions.length)].map((_, i) => (
          <Steps.Step key={`step_${i}`} onClick={() => setStep(i)} />
        ))}
      </Steps>
      <Card
        actions={[
          <Button type="ghost" onClick={() => prevStep()}>
            Prev
          </Button>,
          <Button type="primary" onClick={() => nextStep()}>
            Next
          </Button>,
        ]}
      >
        <Question question={current} />
      </Card>
    </Space>
  );
};

export default Questions;
