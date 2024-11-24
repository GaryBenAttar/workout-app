import { useState } from "react";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

import {
  Done,
  DoneButton,
  NewSetContainer,
  NewSetId,
  NewSetInput,
  StyledIcon,
} from "./new-set.styles";
import Countdown from "./countdown/countdown.component";

const NewSet = ({
  setExerciseSetsValues,
  deleteSet,
  set,
  restTime,
  inProgress,
}) => {
  const { id, reps, weight } = set;

  const [isDone, setIsDone] = useState({
    done: false,
    toggleCountdown: false,
    countdown: restTime,
  });

  const { done, toggleCountdown, countdown } = isDone;

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

  const handleDone = () => {
    if (reps > 0) {
      setIsDone((previousState) => ({
        done: !previousState.done,
        toggleCountdown: !previousState.toggleCountdown,
        countdown: restTime,
      }));
      setExerciseSetsValues(id, reps, weight, !done);
    } else {
      alert("You need to do at least 1 rep");
    }
  };

  return (
    <NewSetContainer done={done}>
      <NewSetId>{id}</NewSetId>
      <NewSetInput
        type="number"
        placeholder={reps}
        value={reps}
        onChange={handleChangeReps}
      />
      <NewSetInput
        type="number"
        placeholder={weight}
        value={weight}
        onChange={handleChangeWeight}
      />
      {inProgress ? (
        <Done>
          <DoneButton onClick={handleDone}>
            <StyledIcon icon={faCheck} />
          </DoneButton>
        </Done>
      ) : (
        <StyledIcon icon={faX} onClick={() => deleteSet(id)} />
      )}
      {toggleCountdown && countdown !== 0 && countdown !== "Off" && (
        <Countdown countdown={countdown} />
      )}
    </NewSetContainer>
  );
};

export default NewSet;
