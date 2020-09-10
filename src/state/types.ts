import { Action } from "redux";
import firebase from "firebase";

export interface LoginState {
  user: firebase.User | null;
}

export interface SetUser extends Action {
  type: "@@login/SET_USER";
  payload: {
    user: LoginState;
  };
}

export type Actions = SetUser;
