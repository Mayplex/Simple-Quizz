import { useEffect, useState } from "react";
import { GameProps } from "../types/questionInterface";
import styles from "./Game.module.css";

export const Game = (props: GameProps) => {
  const [answers, setAnswers] = useState<Array<string | Array<string>>>([]);
  const {
    questions,
    step,
    setStep,
    selectedCorrectAnswer,
    setSelectedCorrectAnswer,
  } = props;
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
    <div className={styles.game}>
      <h1 className={styles.text}>{currentQuestion.question.text}</h1>
      <ul className={styles.list}>
        {answers.map((answer, index) => (
          <li
            className={styles.variants}
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
      <div className={styles.page}>
        {step + 1}/{questions.length}
      </div>
    </div>
  );
};

export default Game;
