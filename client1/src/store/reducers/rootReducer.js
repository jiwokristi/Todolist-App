import { combineReducers } from "redux";

import todoReducer from "./todoReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  isLoading: loadingReducer,
});

export default rootReducer;
