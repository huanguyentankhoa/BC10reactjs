//import { DELETE, EDIT, GET_KEYWORD, SUBMIT } from "../constants";
import * as ActionType from "./../constants";
export const actDelete = (user) => {
  return {
    type: ActionType.DELETE,
    payload: user,
  };
};
export const actEdit = (user) => {
  return {
    type: ActionType.EDIT,
    payload: user,
  };
};
export const actSubmit = (user) => {
  return {
    type: ActionType.SUBMIT,
    payload: user,
  };
};
export const actGetKeyword = (keyword) => {
  return {
    type: ActionType.GET_KEYWORD,
    payload: keyword,
  };
};
