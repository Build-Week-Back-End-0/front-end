import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

import axios from "axios";
import Plant from "./Plant";

const initialPlantList = [];

const PlantList = (props) => {
  const { push } = useHistory();
  const { user_id } = props;

  // const user = localStorage.getItem("user_id");
  const [plantList, setPlantList] = useState(initialPlantList);
  useEffect(() => {
    axios
      .get(`https://watermyplants01.herokuapp.com/api/users/${user_id}/plants`)
      .then((res) => {
        setPlantList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleAdd = () => {
    push("/addPlant");
  };

  return (
    <div>
      <button onClick={handleAdd}>Add a plant</button>
      My Plants
      {plantList.map((plant) => {
        return <Plant key={plant.plant_id} details={plant} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { user_id: state.user };
};

export default connect(mapStateToProps)(PlantList);
