import React from "react";
import { useHistory } from "react-router";

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
          <h1>Dont Forget To Water Your Plants!</h1>
          <p>Let us do the hard work for you</p>
          <button onClick={signUpSubmit}>Sign Up Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
