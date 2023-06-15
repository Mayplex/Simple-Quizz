import { useEffect, useState } from "react";
import { DisplayGameProps } from "../types/Types";
import s from "../modules/Game.module.scss";

export const Game = (props: DisplayGameProps) => {
  const [answers, setAnswers] = useState<Array<string | Array<string>>>([]);
  const { questions, step, setStep, setSelectedCorrectAnswer } = props;
  const currentQuestion = questions[step];

  function shuffleArray(answers: Array<string | Array<string>>) {
    const shuffledArray = [...answers];
    return shuffledArray.sort(() => Math.random() - 0.5);
  }

  function onSelectCorrectAnswer(answer: string | string[]) {
    if (answer === currentQuestion.correctAnswer) {
      setSelectedCorrectAnswer((prev) => prev + 1);
    }
  }

  useEffect(() => {
    setAnswers(
      shuffleArray([
        ...currentQuestion.incorrectAnswers,
        currentQuestion.correctAnswer,
      ])
    );
  }, [currentQuestion]);

  return (
    <div className={s.box}>
      <h1 className={s.text}>{currentQuestion.question.text}</h1>
      <ul className={s.list}>
        {answers.map((answer, index) => (
          <li
            className={s.variants}
            onClick={() => {
              onSelectCorrectAnswer(answer);
              setStep(step + 1);
            }}
            key={index}
          >
            {answer}
          </li>
        ))}
      </ul>
      <div className={s.page}>
        {step + 1}/{questions.length}
      </div>
    </div>
  );
};

export default Game;
