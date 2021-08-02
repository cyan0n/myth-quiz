export interface Question {
  type: "choice" | "truefalse" | "sort";
  text: string;
  image?: string;
}

export interface ChoiceQuestion extends Question {
  choices: string[];
  answer: number;
}

export interface TrueFalseQuestion extends Question {
  answer: boolean;
}

export interface SortQuestion extends Question {
  order: string[];
}
