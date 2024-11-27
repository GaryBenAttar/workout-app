import React, { useEffect, useRef } from "react";
import {
  ExerciseImage,
  SetContent,
  SetContentSpan,
  WorkoutContentContainer,
  WorkoutDetailsHeading,
} from "./workout-content.styles";
import { fetchData } from "../../../../utils/firebase.utils";

const WorkoutContent = ({ exercises }) => {
  const exercisesBaseList = useRef([]);
  useEffect(() => {
    fetchData("exercises")
      .then((result) => (exercisesBaseList.current = result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <WorkoutContentContainer>
      <WorkoutDetailsHeading>Workout</WorkoutDetailsHeading>
      {exercises.map((exercise) => {
        const { sets, title } = exercise;
        const setsDone = sets.filter((set) => set.done).length;

        const exerciseImage = exercisesBaseList.current.filter(
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
