import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import trips from "./trips"
import apply from "./apply"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    trips,
    apply,
    // Outros reducers aqui
  });
