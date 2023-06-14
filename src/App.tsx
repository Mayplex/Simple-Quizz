import React, { useContext, useEffect, useState } from "react";
import { Context } from "./context/Context";
import axios from "axios";
import { IQuestion } from "./types/Types";
import Game from "./components/Game";
import s from "./modules/App.module.scss";

import StartPage from "./components/StartPage";
import { Result } from "./components/Result";

function App() {
  const { start, difficulty } = useContext(Context);
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCorrectAnswer, setSelectedCorrectAnswer] = useState(0);

  useEffect(() => {
    const getQuestions = async () => {
      const res = await axios.get(
        `https://the-trivia-api.com/v2/questions?limit=10&difficulties=${difficulty}`
      );
      setQuestions(res.data);
      setIsLoading(false);
    };

    getQuestions();
  }, [difficulty]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!start) {
    return (
      <div className={s.app}>
        <StartPage />
      </div>
    );
  }

  if (step >= questions.length) {
    return (
      <div className={s.app}>
        <Result selectedCorrectAnswer={selectedCorrectAnswer} />
      </div>
    );
  }

  return (
    <div className={s.app}>
      <Game
        questions={questions}
        step={step}
        setStep={setStep}
        selectedCorrectAnswer={selectedCorrectAnswer}
        setSelectedCorrectAnswer={setSelectedCorrectAnswer}
      />
    </div>
  );
}

export default App;
