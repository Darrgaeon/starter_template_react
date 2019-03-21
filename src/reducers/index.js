import {combineReducers} from "redux";
import {getDataTest} from "./test";

export const rootReducer = combineReducers({
  data: getDataTest
});
