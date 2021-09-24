import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import {
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

import Plant from "./Plant";
import { getCurrentPlants } from "../actions";

// const dummyData = [
//   { nickname: "Steve", species: "Rose", h2oFrequency: "2", user_id: 8 },
//   { nickname: "Bob", species: "Weeds", h2oFrequency: "0", user_id: 8 }
// ];

const PlantList = (props) => {
  const { push } = useHistory();
  const { plants, getCurrentPlants } = props;

  // const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    getCurrentPlants();
  }, [getCurrentPlants]); //necessary dependency?

  const handleAdd = () => {
    push("/addPlant");
  };

  return (
    <div className="plant-list-container">
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Add a plant
      </Button>
      <Typography variant="h3" color="primary">
        My Plants
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "black" }}>Name</TableCell>
              <TableCell style={{ color: "black" }}>Species</TableCell>
              <TableCell style={{ color: "black" }}>Watering Frequency (Days)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {console.log("is this an array?", props.plants)}
            {plants.map((plant) => {
              return <Plant key={plant.plant_id} details={plant} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // user_id: state.user,
    plants: state.plants
  };
};

export default connect(mapStateToProps, { getCurrentPlants })(PlantList);
