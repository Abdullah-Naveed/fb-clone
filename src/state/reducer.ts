import { Reducer } from "redux";
import { Actions, LoginState } from "./types";
import { ApplicationState } from "./index";

export const initialState: LoginState = {
  user: null,
};

export const userSelector = (state: ApplicationState) => {
  return state.login.user;
};

const reducer: Reducer<LoginState> = (
  state: LoginState = initialState,
  action
) => {
  switch ((action as Actions).type) {
    case "@@login/SET_USER":
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
};

export default reducer;
