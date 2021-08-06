import { useUpdateEffect } from "ahooks";
import { Radio, RadioChangeEvent, Space } from "antd";
import React from "react";
import { ChoiceQuestionType } from "../../types";

export interface ChoiceQuestionProps {
  question: ChoiceQuestionType;
  onChange: (value: number) => void;
}
export type ChoiceQuestionComponent = React.FC<ChoiceQuestionProps>;

const ChoiceQuestion: ChoiceQuestionComponent = ({ question, onChange }) => {
  const handleChange = (e: RadioChangeEvent) => {
    onChange(e.target.value);
  };
  const [value, setValue] = React.useState<number | null>(null);
  useUpdateEffect(() => {
    setValue(null);
  }, [question]);

  return (
    <Radio.Group
      buttonStyle="solid"
      onChange={handleChange}
      value={value}
      style={{ width: "100%" }}
    >
      <Space direction="vertical" style={{ width: "100%" }}>
        {question.choices.map((choice, choice_Idx) => (
          <Radio.Button
            key={choice_Idx}
            value={choice_Idx}
            onClick={() => setValue(choice_Idx)}
            style={{ width: "100%", textAlign: "center" }}
          >
            {choice}
          </Radio.Button>
        ))}
      </Space>
    </Radio.Group>
  );
};

export default ChoiceQuestion;
