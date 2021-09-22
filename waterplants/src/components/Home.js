import React from "react";
import { useHistory } from "react-router";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

const Home = () => {
  const { push } = useHistory();
  const signUpSubmit = (e) => {
    push("/signup");
    e.preventDefault();
  };

  return (
    <div>
      <div class="hero-image">
        <div class="hero-text">
          <Typography variant="h2" color="primary" align="center">
            Dont Forget To Water Your Plants!
          </Typography>
          <Typography
            variant="h4"
            align="center"
            color="primary"
            display="block"
          >
            Let us do the hard work for you
          </Typography>

          <Button variant="contained" color="primary" onClick={signUpSubmit}>
            Sign Up Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
