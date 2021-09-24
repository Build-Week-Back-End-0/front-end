import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
// import { getUser } from "../actions";

import axiosWithAuth from "../utils/axiosWithAuth";

const initialUserInfo = {
  password: "",
  phone_number: ""
};

const EditUser = () => {
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const { push } = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/`)
      .then((res) => {
        setUserInfo({
          ...userInfo,
          phone_number: res.data.phone_number
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = () => {
    push("/user");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put("/users/", userInfo)
      .then((res) => {
        // console.log("submitted, returned: ", res);
        push("/user");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="editUserContainer">
      <div>Change my information: </div>
      <form onSubmit={handleSubmit}>
        {/* <div>username</div>  -- need username back from the server on login */}
        <div>
          <label htmlFor="phone_number">phone number</label>
          <input type="phone" name="phone_number" value={userInfo.phone_number} onChange={handleChange} />
        </div>
        {/* <div>
          <label htmlFor="password">new password</label>
          <input type="text" name="password" value={userInfo.password} onChange={handleChange} />
        </div> */}
        <button>Submit</button>
      </form>
      <button onClick={handleClick}>Cancel</button>
    </div>
  );
};

export default EditUser;
