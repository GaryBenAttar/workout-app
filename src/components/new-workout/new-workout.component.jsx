import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  WorkoutContainer,
  EndWorkoutButtonsContainer,
  DiscardWorkoutButton,
  FinishWorkoutButton,
} from "./new-workout.styles";

import Library from "../library/library.component";
import { UserContext } from "../../contexts/user.context";
import WorkoutSummary from "../workout-summary/workout-summary.component";
import ExercisesList from "../exercices-list/exercises-list.component";
import { updateUser } from "../../utils/firebase.utils";

const NewWorkout = ({ routineStart }) => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const [routine, setRoutine] = useState(routineStart);
  const { exercises } = routine;

  const [volume, setVolume] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDuration((previousDuration) => previousDuration + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [routine]);

  const formattedDuration = `${
    Math.floor(duration / 60) > 0 ? Math.floor(duration / 60) + "min" : ""
  } ${duration % 60}s`;

  useEffect(
    () =>
      setVolume(
        exercises.reduce(
          (acc, exercise) =>
            acc +
            Number(
              exercise.sets.reduce(
                (setsAcc, set) =>
                  set.done ? acc + Number(set.weight * set.reps) : setsAcc,
                0
              )
            ),
          0
        )
      ),
    [exercises]
  );

  const setsDone = exercises.filter(
    (exercise) => exercise.sets.filter((set) => set.done).length > 0
  ).length;

  const handleFinishWorkout = () => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const currentDate = new Date();

    const formattedDate = `${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    } ${currentDate.getFullYear()}, ${
      currentDate.getHours() < 10 ? "0" : ""
    }${currentDate.getHours()}:${
      currentDate.getMinutes() < 10 ? "0" : ""
    }${currentDate.getMinutes()}`;

    const newUserData = {
      ...user,
      workouts: [
        {
          name: routine.title || null,
          user: "Vailrog",
          date: formattedDate,
          duration: formattedDuration,
          volume: volume,
          liked: false,
          exercises: exercises,
        },
        ...user.workouts,
      ],
    };

    setUser(newUserData);

    updateUser(user.id, newUserData);

    navigate("/");
  };

  return (
    <>
      <WorkoutSummary
        duration={formattedDuration}
        volume={volume}
        setsDone={setsDone}
      />
      <EndWorkoutButtonsContainer>
        <FinishWorkoutButton
          buttonType={"blue"}
          onClick={() =>
            setsDone > 0
              ? handleFinishWorkout()
              : alert("You must complete at least 1 set")
          }
        >
          Finish
        </FinishWorkoutButton>
        <DiscardWorkoutButton buttonType="red" onClick={() => navigate("/")}>
          Discard Workout
        </DiscardWorkoutButton>
      </EndWorkoutButtonsContainer>
      <WorkoutContainer>
        <ExercisesList
          exercises={exercises}
          setRoutine={setRoutine}
          inProgress={true}
        />
        <Library
          handleExerciseClick={(exercise) =>
            setRoutine((previousState) => ({
              ...previousState,
              exercises: [
                ...exercises,
                {
                  id: Date.now(),
                  title: exercise.title,
                  note: null,
                  sets: [{ id: 1, reps: "", weight: "", done: false }],
                },
              ],
            }))
          }
        />
      </WorkoutContainer>
    </>
  );
};

export default NewWorkout;
