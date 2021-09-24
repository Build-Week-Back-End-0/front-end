import {
  LOGIN,
  LOGOUT,
  LOAD_PLANTS,
  CREATE_PLANT,
  // GET_PLANT,
  UPDATE_PLANT,
  // GET_USER,
  // UPDATE_USER,
  REMOVE_PLANT
} from "../actions/index";

export const initialState = {
  user: {},
  plants: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        user: ""
      };
    case LOAD_PLANTS:
      return {
        ...state,
        plants: action.payload
      };
    case CREATE_PLANT:
      return {
        ...state,
        plants: [...state.plants, action.payload]
      };
    case UPDATE_PLANT:
      return {
        ...state,
        plants: state.plants.map((plant) => {
          if (action.payload !== plant.id) {
            return plant;
          } else {
            return action.payload.values;
          }
        })
      };
    case REMOVE_PLANT:
      return {
        ...state,
        plants: state.plants.filter((plant) => action.payload !== plant.id)
      };

    default:
      return state;
  }
};

export default reducer;
