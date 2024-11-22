import RoutineExerciseCard from "../routine-exercise-card/routine-exercise-card.component";
import { ExercisesContainer } from "./exercises-list.styles";

const ExercisesList = ({ exercises, setRoutine, inProgress }) => {
  return (
    <ExercisesContainer>
      {exercises.map((exercise) => (
        <RoutineExerciseCard
          setRoutine={setRoutine}
          inProgress={inProgress}
          exercise={exercise}
          key={exercise.id}
        />
      ))}
    </ExercisesContainer>
  );
};

export default ExercisesList;
