import { Question } from "./Questions";

export interface Quiz {
  name: string;
  iamge: string;
  description: string;
  quiz: Question[];
}
