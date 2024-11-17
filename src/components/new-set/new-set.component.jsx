import { useEffect, useState } from "react";
import { Done, DoneButton, NewSetContainer } from "./new-set.styles";
import Countdown from "../countdown/countdown.component";

export default function NewSet({
  setExerciseSetsValues,
  deleteSet,
  set,
  restTime,
  inProgress,
}) {
  const { id, reps, weight } = set;

  const [done, setDone] = useState(false);
  const [toggleCountdown, setToggleCountdown] = useState(false);
  const [countdown, setCountdown] = useState(restTime);

  useEffect(() => setExerciseSetsValues(id, reps, weight, done), [done]);

  const handleChangeReps = (event) => {
    if (event.target.value >= 0) {
      setExerciseSetsValues(id, event.target.value, weight);
    }
  };

  const handleChangeWeight = (event) => {
    if (event.target.value >= 0) {
      setExerciseSetsValues(id, reps, event.target.value);
    }
  };

  let timerInterval;

  const timerCountdownStart = () => {
    setCountdown(restTime);
    let i = 1;
    timerInterval = setInterval(() => {
      if (countdown === 0) {
        setCountdown(restTime);
        i = 1;
        clearInterval(timerInterval);
        timerInterval = null;
      }

      setCountdown(restTime - i);
      i++;
    }, 1000);
  };

  const handleDone = () => {
    if (reps > 0) {
      done && setCountdown(0);
      !done && timerCountdownStart();
      setDone(!done);
      setToggleCountdown(!toggleCountdown);
    } else {
      alert("You need to do at least 1 rep");
    }
  };

  return (
    <NewSetContainer className={done ? "done" : ""}>
      <p>{id}</p>
      <input
        type="number"
        placeholder={reps}
        value={reps}
        onChange={handleChangeReps}
      />
      <input
        type="number"
        placeholder={weight}
        value={weight}
        onChange={handleChangeWeight}
      />
      {inProgress ? (
        <Done>
          <DoneButton onClick={handleDone}>
            <i className="fa-solid fa-check"></i>
          </DoneButton>
        </Done>
      ) : (
        <i className="fa-solid fa-x" onClick={() => deleteSet(id)}></i>
      )}
      {/* {toggleCountdown && countdown !== 0 && countdown !== "Off" && (
        <Countdown countdown={countdown} />
      )} */}
    </NewSetContainer>
  );
}
