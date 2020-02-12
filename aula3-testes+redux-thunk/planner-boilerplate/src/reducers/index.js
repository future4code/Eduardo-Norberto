import { combineReducers } from "redux";
import tasks from "./tasks"

export const rootReducer = combineReducers({
  tasks,
  // Seus reducers aqui
});
