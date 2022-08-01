import { SET_LOADING } from "./actionTypes";

export const setLoadingAction = (payload) => {
  return {
    type: SET_LOADING,
    payload,
  };
};
