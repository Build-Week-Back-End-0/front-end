import React, { useState, useEffect } from "react";
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
  Paper,
} from "@material-ui/core";

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
              <TableCell style={{ color: "black" }}>
                Watering Frequency (Days)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {plantList.map((plant) => {
              return <Plant key={plant.plant_id} details={plant} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { user_id: state.user };
};

export default connect(mapStateToProps)(PlantList);
