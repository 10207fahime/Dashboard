import { combineReducers } from "redux";
import { UserReducer } from "./Users/reducer";

export const reducers = combineReducers({
  users: UserReducer,
});
