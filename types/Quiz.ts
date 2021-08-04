import { QuestionType } from "./Questions";

export interface Quiz {
  name: string;
  slug: string;
  image?: string;
  description?: string;
  quiz: QuestionType[];
}
