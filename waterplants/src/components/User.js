import React, { useState } from "react";
import PlantList from "./PlantList";
import { useHistory } from "react-router";

const User = () => {
  const { push } = useHistory();

  return (
    <div>
      <button onClick={() => push("/my-info")}>Edit My Info</button>
      <button onClick={() => push("/logout")}>Logout</button>

      <PlantList />
    </div>
  );
};

export default User;
