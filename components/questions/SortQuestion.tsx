import { Button } from "antd";
import React from "react";
import { SortQuestionType } from "../../types";

export interface SortQuestionProps {
  question: SortQuestionType;
}
export type SortQuestionComponent = React.FC<SortQuestionProps>;

const SortQuestion: SortQuestionComponent = ({ question }) => {
  return (
    <>
      {question.order.map((choice, choice_Idx) => (
        <Button key={`${choice_Idx}`}>{choice}</Button>
      ))}
    </>
  );
};

export default SortQuestion;
