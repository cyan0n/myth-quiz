import { Radio, RadioChangeEvent } from "antd";
import React from "react";

export interface TrueFalseQuestionProps {
  onChange: (value: boolean) => void;
}
export type TrueFalseQuestionComponent = React.FC<TrueFalseQuestionProps>;

const TrueFalseQuestion: TrueFalseQuestionComponent = ({ onChange }) => {
  const handleChange = (e: RadioChangeEvent) => {
    onChange(e.target.value);
  };

  return (
    <Radio.Group buttonStyle="solid" onChange={handleChange}>
      <Radio.Button value={true}>Vero</Radio.Button>
      <Radio.Button value={false}>Falso</Radio.Button>
    </Radio.Group>
  );
};

export default TrueFalseQuestion;
