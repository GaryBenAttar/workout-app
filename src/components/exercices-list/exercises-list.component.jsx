const ExercisesList = ({ exercises }) => {
  return (
    <ExercisesContainer>
      {exercises.map((exercise) => (
        <RoutineExercisesCard
          routineExercises={routineExercises}
          setRoutineExercises={setRoutineExercises}
          inProgress={true}
          exercise={exercise}
          key={exercise.title}
        />
      ))}
    </ExercisesContainer>
  );
};

export default ExercisesList;
