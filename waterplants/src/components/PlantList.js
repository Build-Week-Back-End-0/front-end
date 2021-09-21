import React, { useState, useEffect } from "react";
import axios from "axios";
import Plant from "./Plant";

const initialPlantList = [];

const PlantList = () => {
  const user = localStorage.getItem("user_id");
  const [plantList, setPlantList] = useState(initialPlantList);
  useEffect(() => {
    axios
      .get(`https://watermyplants01.herokuapp.com/api/users/${user}/plants`)
      .then((res) => {
        setPlantList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {plantList.map((plant) => {
        return <Plant key={plant.plant_id} details={plant} />;
      })}
    </div>
  );
};

export default PlantList;
