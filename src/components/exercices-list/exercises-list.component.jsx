import RoutineExerciseCard from "../routine-exercise-card/routine-exercise-card.component";
import { ExercisesContainer } from "./exercises-list.styles";

const ExercisesList = ({
  exercises,
  routineExercises,
  setRoutineExercises,
  inProgress,
}) => {
  return (
    <ExercisesContainer>
      {exercises.map((exercise) => (
        <RoutineExerciseCard
          routineExercises={routineExercises}
          setRoutineExercises={setRoutineExercises}
          inProgress={inProgress}
          exercise={exercise}
          key={exercise.title}
        />
      ))}
    </ExercisesContainer>
  );
};

export default ExercisesList;
