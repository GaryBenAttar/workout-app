import { ROUTINES_ACTION_TYPE } from "./routines.type";

const getInitalRoutines = () => {
  const routinesStored = localStorage.getItem("routines");
  return routinesStored ? JSON.parse(routinesStored) : [];
};

export const routinesReducer = ({ state = getInitalRoutines(), action }) => {
  const { type, payload } = action;

  switch (type) {
    case ROUTINES_ACTION_TYPE.SET_ROUTINES_LIST:
      return {
        ...state,
        currentRoutinesList: payload,
      };

    default:
      return state;
  }
};
