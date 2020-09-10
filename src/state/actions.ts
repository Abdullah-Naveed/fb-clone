import { ActionCreator } from "redux";
import { LoginState, SetUser } from "./types";

export const setUser: ActionCreator<SetUser> = (user: LoginState) => ({
  type: "@@login/SET_USER",
  payload: {
    user,
  },
});
