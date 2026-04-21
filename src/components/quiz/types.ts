export type QuizOption = {
  id: string;
  emoji?: string;
  bold?: string;
  rest?: string;
  text?: string;
  imagePlaceholder?: boolean;
  chevron?: boolean;
};

export type Answers = Record<number, string | string[] | { name: string; email: string }>;
