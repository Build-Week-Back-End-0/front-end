import React, { useState } from "react";
import { useHistory } from "react-router";

const EditUser = () => {
  const [userInfo, setUserInfo] = useState();
  const { push } = useHistory();

  const handleClick = () => {
    push("/user");
  };

  return (
    <div className="editUserContainer">
      <div>..editing my info.. </div>
      <form>
        <div>username</div>
        <div>
          <label htmlFor="username">phone number</label>
          <input type="phone" />
        </div>
        <div>
          <label htmlFor="password">new password</label>
          <input type="text" />
        </div>
      </form>
      <button onClick={handleClick}>Cancel</button>
    </div>
  );
};

export default EditUser;
