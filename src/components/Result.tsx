import { ResultProps } from "../types/questionInterface";
import styles from "./Result.module.css";

export const Result = (props: ResultProps) => {
  return (
    <div className={styles.result}>
      <h1 className={styles.text}>CONGRATULATIONS!</h1>
      <h2 className={styles.score}>
        Total score : {props.selectedCorrectAnswer}
      </h2>
      <a href="/">
        <button className={styles.button}>Try Again</button>
      </a>
    </div>
  );
};

export default Result;
