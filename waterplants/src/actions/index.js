export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const CREATE_PLANT = "CREATE_PLANT";
export const UPDATE_PLANT = "UPDATE_PLANT";
export const REMOVE_PLANT = "REMOVE_PLANT";

export const login = (credentials) => {
  return { type: LOGIN, payload: credentials };
};

export const logout = (token) => {
  return { type: LOGOUT, payload: token };
};

export const signup = (signupFormValues) => {
  return { type: SIGNUP, payload: signupFormValues };
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
