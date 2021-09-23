import React from "react";
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

const Plant = ({ details }) => {
  const { push } = useHistory();
  const plantEdit = () =>
    push(`/plants/update/${details.plant_id}`, { plant: details });

  if (!details) {
    return <h3>Working on fetching your User&apos;s details</h3>;
  }

  return (
    <TableRow>
      <TableCell style={{ color: "black" }}>{details.nickname}</TableCell>
      <TableCell style={{ color: "black" }}>{details.species}</TableCell>
      <TableCell style={{ color: "black" }} align="center">
        {details.h2oFrequency}
      </TableCell>
    </TableRow>
  );
};

export default Plant;
