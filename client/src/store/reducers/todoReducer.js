import { FETCH_TODOS } from "../actions/actionTypes";

const initialState = {
  todos: [],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
}
