import { Card, Button } from "antd";
import React from "react";
import {
  ChoiceQuestionType,
  QuestionType,
  SortQuestionType,
} from "../../types";
import ChoiceQuestion from "./ChoiceQuestion";
import SortQuestion from "./SortQuestion";
import TrueFalseQuestion from "./TrueFalseQuestion";

export interface QuestionProps {
  question: QuestionType;
  onChange: (value: any) => void;
}

type QuestionComponent = React.FC<QuestionProps>;

const Question: QuestionComponent = ({ question, onChange }) => {
  const handleChange = onChange;
  return (
    <>
      <p>{question.text}</p>
      {question.type === "choice" && (
        <ChoiceQuestion
          question={question as ChoiceQuestionType}
          onChange={handleChange}
        />
      )}
      {question.type === "truefalse" && (
        <TrueFalseQuestion onChange={handleChange} />
      )}
      {question.type === "sort" && (
        <SortQuestion
          question={question as SortQuestionType}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default Question;
