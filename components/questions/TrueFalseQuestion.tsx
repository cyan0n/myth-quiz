import { useUpdateEffect } from "ahooks";
import { Radio, RadioChangeEvent } from "antd";
import React from "react";
import { TrueFalseQuestionType } from "../../types";

export interface TrueFalseQuestionProps {
  question: TrueFalseQuestionType;
  onChange: (value: boolean) => void;
}
export type TrueFalseQuestionComponent = React.FC<TrueFalseQuestionProps>;

const TrueFalseQuestion: TrueFalseQuestionComponent = ({
  onChange,
  question,
}) => {
  const handleChange = (e: RadioChangeEvent) => {
    onChange(e.target.value);
  };
  const [value, setValue] = React.useState<boolean | null>(null);
  useUpdateEffect(() => {
    setValue(null);
  }, [question]);

  return (
    <Radio.Group buttonStyle="solid" onChange={handleChange} value={value}>
      <Radio.Button value={true} onClick={() => setValue(true)}>
        Vero
      </Radio.Button>
      <Radio.Button value={false} onClick={() => setValue(false)}>
        Falso
      </Radio.Button>
    </Radio.Group>
  );
};

export default TrueFalseQuestion;
