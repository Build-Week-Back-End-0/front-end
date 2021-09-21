import React, { useState, useEffect } from "react";
import axios from "axios";
import Plant from "./Plant";

const initialPlantList = [];

const PlantList = () => {
  const [plantList, setPlantList] = useState(initialPlantList);
  useEffect(() => {
    axios
      .get("https://watermyplants01.herokuapp.com/api/plants")
      .then((res) => {
        setPlantList(res.data);
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
