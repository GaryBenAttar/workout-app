import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer.jsx";
import { routinesReducer } from "./routines/routines.reducer.js";

export const rootReducer = combineReducers({
  user: userReducer,
  routines: routinesReducer,
});
