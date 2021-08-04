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
}

type QuestionComponent = React.FC<QuestionProps>;

const Question: QuestionComponent = ({ question }) => {
  return (
    <>
      <p>{question.text}</p>
      {question.type === "choice" && (
        <ChoiceQuestion question={question as ChoiceQuestionType} />
      )}
      {question.type === "truefalse" && <TrueFalseQuestion />}
      {question.type === "sort" && (
        <SortQuestion question={question as SortQuestionType} />
      )}
    </>
  );
};

export default Question;
