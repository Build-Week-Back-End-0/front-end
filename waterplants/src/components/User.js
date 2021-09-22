import React, { useState } from "react";

import { Link } from "react-router-dom";

import PlantList from "./PlantList";

const User = () => {
  const [isDropDown, setIsDropDown] = useState(false);

  return (
    <div>
      <div onMouseLeave={() => setIsDropDown(false)}>
        <button onMouseOver={() => setIsDropDown(true)}>
          <div>
            <span>My Account</span>
          </div>
        </button>
        {isDropDown && (
          <div>
            <div>
              <Link to="/my-info">Edit My Info</Link>
            </div>
            <div>
              <Link to="/logout">Logout</Link>
            </div>
          </div>
        )}
      </div>

      <PlantList />
    </div>
  );
};

export default User;
