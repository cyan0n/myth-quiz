export interface QuestionType {
  type: "choice" | "truefalse" | "sort";
  text: string;
  answer: number | boolean | string[];
}

export interface ChoiceQuestionType extends QuestionType {
  choices: string[];
  answer: number;
}

export interface TrueFalseQuestionType extends QuestionType {
  answer: boolean;
}

export interface SortQuestionType extends QuestionType {
  order: string[];
  answer: string[];
}
