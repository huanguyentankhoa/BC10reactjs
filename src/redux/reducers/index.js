import { combineReducers } from "redux";
import userReducer from "./user";

const rootReducer = combineReducers({
  // combine child reducer
  userReducer,
});

export default rootReducer;
