import { createAction } from "../../utils/reducer.utils";
import { ROUTINES_ACTION_TYPE } from "./routines.type";

export const setRoutinesList = (routines) => {
  createAction(ROUTINES_ACTION_TYPE.SET_ROUTINES_LIST, routines);
};
