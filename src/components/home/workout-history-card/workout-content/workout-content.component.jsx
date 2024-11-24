import React from "react";
import {
  ExerciseImage,
  SetContent,
  SetContentSpan,
  WorkoutContentContainer,
  WorkoutDetailsHeading,
} from "./workout-content.styles";

const WorkoutContent = ({ exercises, exercisesList }) => {
  return (
    <WorkoutContentContainer>
      <WorkoutDetailsHeading>Workout</WorkoutDetailsHeading>
      {exercises.map((exercise) => {
        const { sets, title } = exercise;
        const setsDone = sets.filter((set) => set.done).length;

        const exerciseImage = exercisesList.filter(
          (obj) => obj.title === exercise.title
        )[0].imageUrl;

        return (
          setsDone > 0 && (
            <SetContent key={exercise.id}>
              <ExerciseImage alt="set" src={`${exerciseImage}`} />
              <SetContentSpan>{`${setsDone} sets ${title}`}</SetContentSpan>
            </SetContent>
          )
        );
      })}
    </WorkoutContentContainer>
  );
};

export default WorkoutContent;
