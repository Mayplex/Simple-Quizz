import { ResultProps } from "../types/Types";
import s from "../modules/Result.module.scss";

export const Result = (props: ResultProps) => {
  return (
    <div className={s.result}>
      <h1 className={s.text}>CONGRATULATIONS!</h1>
      <h2 className={s.score}>
        Total score : {props.selectedCorrectAnswer}
      </h2>
      <a href="/">
        <button className={s.button}>Try Again</button>
      </a>
    </div>
  );
}
