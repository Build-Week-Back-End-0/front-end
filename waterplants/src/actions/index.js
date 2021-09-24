import axiosWithAuth from "../utils/axiosWithAuth";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const LOAD_PLANTS = "LOAD_PLANTS";
export const CREATE_PLANT = "CREATE_PLANT";
export const GET_PLANT = "GET_PLANT";
export const UPDATE_PLANT = "UPDATE_PLANT";
export const GET_USER = "GET_USER";
export const UPDATE_USER = "UPDATE_USER";
export const REMOVE_PLANT = "REMOVE_PLANT";
// export const GET_PLANT = "GET_PLANT";

export const addPlant = (newPlant, user) => {
  return (dispatch) => {
    axiosWithAuth()
      .post("/plants", {
        user_id: user,
        ...newPlant
      })
      .then((res) => {
        // console.log(res.data);
        dispatch(createPlant(res.data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const deletePlant = (plant_id) => {
  return (dispatch) => {
    axiosWithAuth()
      .delete(`/plants/${plant_id}`)
      .then((res) => {
        // console.log(plant_id);
        dispatch(removePlant(plant_id));
      })
      .catch((err) => {
        console.error(err);
        console.log("deleting: ", plant_id);
      });
  };
};

export const getCurrentPlants = () => {
  return async (dispatch) => {
    await axiosWithAuth()
      .get(`/users/plants`)
      .then((res) => {
        // console.log("plants res", res);
        dispatch(loadPlants(res.data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const getPlant = (plant_id) => {
  return (dispatch) => {
    axiosWithAuth()
      .get(`/plants/${plant_id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const getUser = () => {
  return (dispatch) => {
    axiosWithAuth()
      .get(`/users/`)
      .then((res) => {
        console.log(res);
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

// export const getPlant = (plantId) => {
//   return { type: GET_PLANT, payload: plantId };
// };

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
