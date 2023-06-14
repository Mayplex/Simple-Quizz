import { ReactNode } from "react";

export interface IQuestion {
  id: string;
  question: {
    text: string;
  };
  incorrectAnswers: [string];
  correctAnswer: string;
}
export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export interface IContextType {
  difficulty: Difficulty;
  setDifficulty: React.Dispatch<React.SetStateAction<Difficulty>>;
  start: boolean;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ContextProviderProps {
  children: ReactNode;
}

export type DisplayGameProps = {
  questions: IQuestion[];
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  selectedCorrectAnswer: number;
  setSelectedCorrectAnswer: React.Dispatch<React.SetStateAction<number>>;
};

export type ResultProps = {
  selectedCorrectAnswer: number;
};
