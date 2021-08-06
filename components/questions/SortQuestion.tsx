import { Space, Tag } from "antd";
import React, { useState } from "react";
import { SortQuestionType } from "../../types";
import ToggleButton from "../ToggleButton";
import { useSet, useUpdateEffect } from "ahooks";

export interface SortQuestionProps {
  question: SortQuestionType;
  onChange: (value: string[] | null) => void;
}
export type SortQuestionComponent = React.FC<SortQuestionProps>;

const SortQuestion: SortQuestionComponent = ({ question, onChange }) => {
  const [set, { add, remove, reset }] = useSet<string>([]);
  const [refresh, setRefresh] = useState<number>(0);
  const handleToggle = (value: boolean, choice: string) => {
    value ? add(choice) : remove(choice);
  };

  useUpdateEffect(() => {
    if (set.size === question.order.length) {
      onChange(Array.from(set.values()));
    } else {
      onChange(null);
    }
  }, [set]);

  useUpdateEffect(() => {
    setRefresh(refresh + 1);
    reset();
  }, [question]);

  return (
    <Space direction="vertical">
      <Space direction="vertical">
        {question.order.map((choice, choice_Idx) => (
          <ToggleButton
            key={`${refresh}${choice_Idx}`}
            onToggle={(value) => {
              handleToggle(value, choice);
            }}
          >
            {choice}
          </ToggleButton>
        ))}
      </Space>
      <Space direction="horizontal" wrap={true}>
        {Array.from(set.values()).map((choice, choice_Idx) => (
          <Tag key={choice_Idx}>
            {choice_Idx + 1}: {choice}
          </Tag>
        ))}
      </Space>
    </Space>
  );
};

export default SortQuestion;
