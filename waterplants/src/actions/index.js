import axiosWithAuth from "../utils/axiosWithAuth";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const LOAD_PLANTS = "LOAD_PLANTS";
export const CREATE_PLANT = "CREATE_PLANT";
export const UPDATE_PLANT = "UPDATE_PLANT";
export const REMOVE_PLANT = "REMOVE_PLANT";

export const addPlant = (newPlant, user) => {
  return (dispatch) => {
    axiosWithAuth()
      .post("/plants", {
        user_id: user,
        ...newPlant
      })
      .then((res) => {
        dispatch(createPlant(res.data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const loadPlants = (plants) => {
  return { type: LOAD_PLANTS, payload: plants };
};

export const createPlant = (plantValues) => {
  return { type: CREATE_PLANT, payload: plantValues };
};

export const updatePlant = (plantId, plantValues) => {
  return { type: UPDATE_PLANT, payload: { id: plantId, values: plantValues } };
};

export const removePlant = (plantId) => {
  return { type: REMOVE_PLANT, payload: plantId };
};

export const login = (user) => {
  return { type: LOGIN, payload: user };
};
export const logout = () => {
  return { type: LOGOUT };
};
