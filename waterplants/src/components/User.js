import React, { useState } from "react";

import { Link } from "react-router-dom";

import PlantList from "./PlantList";
import { Typography, Button } from "@material-ui/core";
const User = () => {
  const [isDropDown, setIsDropDown] = useState(false);

  return (
    <div className="hero-image">
      <div className="hero-text">
        {/* <div> */}
        <div
          className="account-drop-down"
          onMouseLeave={() => setIsDropDown(false)}
        >
          <Button
            color="primary"
            variant="contained"
            onMouseOver={() => setIsDropDown(true)}
          >
            My Account
          </Button>
          {isDropDown && (
            <div>
              <div>
                <Button to="/my-info" component={Link}>
                  Edit My Info
                </Button>
              </div>
              <div>
                <Button to="/logout" component={Link}>
                  Logout
                </Button>
              </div>
            </div>
          )}
        </div>

        <PlantList />
        {/* </div> */}
      </div>
    </div>
  );
};

export default User;
