import { ADD_USER, DELETE_USER, FILTER_USER, UPDATE_USER } from "./actionType";
import { initialState } from "./state";
export function UserReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        filteredUsers: [...state.users, action.payload],
      };
    case DELETE_USER:
      return {
        ...state,
        users: [...state.users.filter((item) => item.id !== action.payload)],
        filteredUsers: [
          ...state.users.filter((item) => item.id !== action.payload),
        ],
      };
    case UPDATE_USER:
      const userIndex = state.users.findIndex(
        (item) => item.id === action.payload.id
      );
      const userList = [...state.users];
      userList[userIndex] = { id: action.payload.id, ...action.payload.value };
      return {
        ...state,
        users: userList,
        filteredUsers: userList,
      };
    case FILTER_USER:
      if (action.payload.length === 0) {
        return { ...state, filteredUsers: state.users };
      }
      return { ...state, filteredUsers: action.payload };

    default:
      return state;
  }
}
