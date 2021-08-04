import { Card, Button, Radio } from "antd";
import React from "react";
import { ChoiceQuestionType } from "../../types";

export interface ChoiceQuestionProps {
  key?: React.Key | undefined | null;
  question: ChoiceQuestionType;
}
export type ChoiceQuestionComponent = React.FC<ChoiceQuestionProps>;

const ChoiceQuestion: ChoiceQuestionComponent = ({ key, question }) => {
  return (
    <>
      <Radio.Group buttonStyle="solid">
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
