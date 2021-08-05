import { useCounter } from "ahooks";
import { Space, Steps, Card, Button, Progress } from "antd";
import React, { useEffect, useState } from "react";
import { SaveAnswer } from "../../services/ContestantService";
import { QuestionType } from "../../types";
import Question from "./Question";

export interface QuestionsProps {
  checkpoint?: number;
  questions: QuestionType[];
  onAnswer: (question_Idx: number, answer: any) => void | Promise<void>;
  onComplete: () => void;
}

type QuestionsComponent = React.FC<QuestionsProps>;

const Questions: QuestionsComponent = ({
  checkpoint = 0,
  questions,
  onAnswer,
  onComplete,
}) => {
  const [step, { inc: nextStep, dec: prevStep, set: setStep }] = useCounter(
    checkpoint,
    {
      min: 0,
      max: questions.length,
    },
  );
  const [current, setCurrent] = useState<QuestionType>(questions[step]);
  const [currentValue, setCurrentValue] = useState(null);

  useEffect(() => {
    setCurrent(questions[step]);
    setCurrentValue(null);
  }, [step]);
  useEffect(() => {
    console.log(step);
    if (step === questions.length) {
      onComplete();
    }
  }, []);

  const handleClick = async () => {
    await onAnswer(step, currentValue);
    if (step < questions.length - 1) {
      nextStep();
    } else {
      onComplete();
    }
  };

  return (
    <Space direction="vertical">
      <Progress percent={(step / questions.length) * 100} showInfo={false} />
      <Card
        actions={[
          <Button
            type="primary"
            onClick={handleClick}
            disabled={currentValue === null}
          >
            Next
          </Button>,
        ]}
      >
        {current && <Question question={current} onChange={setCurrentValue} />}
      </Card>
    </Space>
  );
};

export default Questions;
