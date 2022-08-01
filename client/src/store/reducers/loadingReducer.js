import { SET_LOADING } from "../actions/actionTypes";

const initialState = {
  isLoading: true,
};
export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}
