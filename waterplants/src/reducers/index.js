import { LOAD_PLANTS, CREATE_PLANT, UPDATE_PLANT, REMOVE_PLANT } from "../actions/index";

export const initialState = {
  plants: []
};

const reducer = (state, action) => {
  switch (action.type) {
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
          if (action.payload.id !== plant.id) {
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
