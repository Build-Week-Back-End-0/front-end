import { LOGIN, LOGOUT, SIGNUP, CREATE_PLANT, UPDATE_PLANT } from "../actions/index";

export const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    // case LOGIN:
    //   return {
    //     state
    //   };
    // case LOGOUT:
    //   return {
    //     state
    //   };
    // case SIGNUP:
    //   return {
    //     state
    //   };
    // case CREATE_PLANT:
    //   return {
    //     state
    //   };
    // case UPDATE_PLANT:
    //   return {
    //     state
    //   };

    default:
      return state;
  }
};

export default reducer;
