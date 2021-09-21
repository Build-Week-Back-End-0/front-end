import React, { useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router";

const Logout = () => {
  const { push } = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .post("/logout")
      .then((res) => {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return <div></div>;
};

export default Logout;
