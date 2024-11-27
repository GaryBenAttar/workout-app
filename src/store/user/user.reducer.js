import { USER_ACTION_TYPE } from "./user.type";

const getInitialUserData = () => {
  const userStored = localStorage.getItem("user");
  return userStored
    ? { currentUser: JSON.parse(userStored) }
    : {
        currentUser: {},
      };
};

export const userReducer = ({ state = getInitialUserData(), action = {} }) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
