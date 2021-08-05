import { Button } from "antd";
import React from "react";
import { SortQuestionType } from "../../types";
import ToggleButton from "../ToggleButton";
import { useSet, useUpdateEffect } from "ahooks";

export interface SortQuestionProps {
  question: SortQuestionType;
  onChange: (value: string[]) => void;
}
export type SortQuestionComponent = React.FC<SortQuestionProps>;

const SortQuestion: SortQuestionComponent = ({ question, onChange }) => {
  const [set, { add, remove }] = useSet<string>([]);
  const handleToggle = (value: boolean, choice: string) => {
    value ? add(choice) : remove(choice);
  };
  useUpdateEffect(() => {
    onChange(Array.from(set.values()));
  }, [set]);
  return (
    <>
      {question.order.map((choice, choice_Idx) => (
        <ToggleButton
          key={`${choice_Idx}`}
          onToggle={(value) => {
            handleToggle(value, choice);
          }}
        >
          {choice}
        </ToggleButton>
      ))}
      {Array.from(set.values()).map((choice, choice_Idx) => (
        <p key={choice_Idx}>{choice}</p>
      ))}
    </>
  );
};

export default SortQuestion;
