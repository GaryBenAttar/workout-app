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
import { useSetValues } from "./hooks/useSetValues.hook";

const NewSet = ({
  setExerciseSetsValues,
  deleteSet,
  set,
  restTime,
  inProgress,
}) => {
  const {
    done,
    toggleCountdown,
    countdown,
    handleChangeReps,
    handleChangeWeight,
    handleDone,
  } = useSetValues(setExerciseSetsValues, set, restTime);

  return (
    <NewSetContainer $done={done ? "done" : ""}>
      <NewSetId>{set.id}</NewSetId>
      <NewSetInput
        type="number"
        placeholder={set.reps}
        value={set.reps}
        onChange={handleChangeReps}
      />
      <NewSetInput
        type="number"
        placeholder={set.weight}
        value={set.weight}
        onChange={handleChangeWeight}
      />
      {inProgress ? (
        <Done>
          <DoneButton onClick={handleDone}>
            <StyledIcon icon={faCheck} />
          </DoneButton>
        </Done>
      ) : (
        <StyledIcon icon={faX} onClick={() => deleteSet(set.id)} />
      )}
      {toggleCountdown && countdown !== 0 && (
        <Countdown countdown={countdown} />
      )}
    </NewSetContainer>
  );
};

export default NewSet;
