import { Card, Button, Radio, RadioChangeEvent } from "antd";
import React from "react";
import { ChoiceQuestionType } from "../../types";

export interface ChoiceQuestionProps {
  key?: React.Key | undefined | null;
  question: ChoiceQuestionType;
  onChange: (value: number) => void;
}
export type ChoiceQuestionComponent = React.FC<ChoiceQuestionProps>;

const ChoiceQuestion: ChoiceQuestionComponent = ({
  key,
  question,
  onChange,
}) => {
  const handleChange = (e: RadioChangeEvent) => {
    onChange(e.target.value);
  };

  return (
    <>
      <Radio.Group buttonStyle="solid" onChange={handleChange}>
        {question.choices.map((choice, choice_Idx) => (
          <Radio.Button key={`${key}_${choice_Idx}`} value={choice_Idx}>
            {choice}
          </Radio.Button>
        ))}
      </Radio.Group>
    </>
  );
};

export default ChoiceQuestion;
