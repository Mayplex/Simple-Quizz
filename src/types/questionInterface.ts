export interface Question {
  id: string;
  question: {
    text: string;
  };
  incorrectAnswers: [string];
  correctAnswer: string;
}

export type GameProps = {
  questions: Question[];
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  selectedCorrectAnswer:number
  setSelectedCorrectAnswer:React.Dispatch<React.SetStateAction<number>>;

};

export type ResultProps={
  selectedCorrectAnswer:number
}