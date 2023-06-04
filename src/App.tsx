import React, { useEffect, useState } from "react";
import axios from "axios";
import { Question } from "./types/questionInterface";
import Game from "./components/Game";
import styles from "./App.module.css";
import Result from "./components/Result";

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCorrectAnswer, setSelectedCorrectAnswer] = useState(0);

  const getQuestions = async () => {
    const res = await axios.get(
      "https://the-trivia-api.com/v2/questions?limit=10"
    );

    setQuestions(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div className={styles.app}>
      <h1 className={styles.text}>Simple Quizz</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : questions.length > 0 && step < questions.length ? (
        <Game
          questions={questions}
          step={step}
          setStep={setStep}
          selectedCorrectAnswer={selectedCorrectAnswer}
          setSelectedCorrectAnswer={setSelectedCorrectAnswer}
        />
      ) : (
        <Result selectedCorrectAnswer={selectedCorrectAnswer} />
      )}
    </div>
  );
}

export default App;
