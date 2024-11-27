import { useContext } from "react";
import { UserContext } from "../../../../../contexts/user.context";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../../../../utils/firebase.utils";

export const useFinishWorkout = (routine, formattedDuration, volume) => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

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
          name: routine.title,
          date: formattedDate,
          duration: formattedDuration,
          volume: volume,
          liked: false,
          exercises: routine.exercises,
        },
        ...user.workouts,
      ],
    };

    setUser(newUserData);

    updateUser(user.uid, newUserData);

    navigate("/");
  };

  return { handleFinishWorkout };
};
