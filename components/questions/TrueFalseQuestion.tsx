import { Radio } from "antd";
import React from "react";

export interface TrueFalseQuestionProps {}
export type TrueFalseQuestionComponent = React.FC<TrueFalseQuestionProps>;

const TrueFalseQuestion: TrueFalseQuestionComponent = ({}) => {
  return (
    <Radio.Group buttonStyle="solid">
      <Radio.Button value={true}>Vero</Radio.Button>
      <Radio.Button value={false}>Falso</Radio.Button>
    </Radio.Group>
  );
};

export default TrueFalseQuestion;
