import { AnyAction } from "@reduxjs/toolkit";
import { USER_ACTION_TYPES } from "./user.types";
import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
} from "./user.action";
import { UserInfo } from "../../utils/firebase";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};
export type UserState = {
  readonly currentUser: null | UserInfo;
  isLoading: boolean;
  error: Error | null;
};

export const userReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): UserState => {
  // we set state to a default of INITIAL_STATE because unlike useReducer that takes
  // in the initial state as an argument, here, there is no indication that INITIAL_STATE
  //   is the initial state except by passing it as a default argument
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }
  if (
    signInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }
  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  return state;
  //   dispatch function will only fire action to the reducer
  //  it is associated with unlike redux where the dispatch fires action to all reducers
  // Since user reducer will also be fired and none of the switch cases might be true for it,
  // It 'default:' will be to return the state it was in initially and not an error.
};
