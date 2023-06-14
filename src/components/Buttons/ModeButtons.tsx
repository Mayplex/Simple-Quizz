import { useContext } from "react";
import s from "../../modules/ModeButtons.module.scss";
import { Context } from "../../context/Context";
import { Difficulty } from "../../types/Types";

const ModeButton = () => {
  const { setDifficulty, setStart, start } = useContext(Context);

  const onDifficultyChange = (selectedDifficulty: Difficulty) => {
    setStart(!start);
    setDifficulty(selectedDifficulty);
  };

  return (
    <div className={s.buttonBox}>
      <button
        className={s.button}
        onClick={() => onDifficultyChange(Difficulty.EASY)}
      >
        Easy
      </button>
      <button
        className={s.button}
        onClick={() => onDifficultyChange(Difficulty.MEDIUM)}
      >
        Medium
      </button>
      <button
        className={s.button}
        onClick={() => onDifficultyChange(Difficulty.HARD)}
      >
        Hard
      </button>
    </div>
  );
};

export default ModeButton;
