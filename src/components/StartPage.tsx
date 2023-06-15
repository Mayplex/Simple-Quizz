import ModeButtons from "./Buttons/ModeButtons";
import s from "../modules/StartPage.module.scss";

const StartPage = () => {
  return (
    <div className={s.box}>
      <h1 className={s.title}>Welcome to my Simple Quizz!</h1>
      <h6 className={s.subtitle}>Please , choose the difficulty below : </h6>
      <ModeButtons />
    </div>
  );
};

export default StartPage;
