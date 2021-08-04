import { Question } from "./Questions";

export interface Quiz {
  name: string;
  slug: string;
  image?: string;
  description?: string;
  quiz: Question[];
}
