import { ADD_USER, DELETE_USER, FILTER_USER, UPDATE_USER } from "./actionType";
export function Add_user(param) {
  console.log(param, "ww?");
  return {
    type: ADD_USER,
    payload: param,
  };
}
export function Update_user(id, param) {
  console.log(param, "param");
  return {
    type: UPDATE_USER,
    payload: {
      id: id,
      value: param,
    },
  };
}
export function Delete_user(id) {
  return {
    type: DELETE_USER,
    payload: id,
  };
}
export function Filter_user(array) {
  return {
    type: FILTER_USER,
    payload: array,
  };
}
