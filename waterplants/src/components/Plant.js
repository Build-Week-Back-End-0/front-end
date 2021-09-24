import { getThemeProps } from "@material-ui/styles";
import React, { useState } from "react";
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

import { deletePlant } from "../actions";

const Plant = (props) => {
  const { details } = props;
  const [confirmDelete, setConfirmDelete] = useState(false);
  const { push } = useHistory();
  const plantEdit = () =>
    push(`/plants/update/${details.plant_id}`, { plant: details });

  if (!details) {
    return <h3>Working on fetching your User&apos;s details</h3>;
  }

  const handleDelete = () => {
    setConfirmDelete(true);
  };

  const handleYes = () => {
    props.deletePlant(details.plant_id);
    setConfirmDelete(false);
    push("/user");
  };

  const handleNo = () => {
    setConfirmDelete(false);
  };

  return (
    <TableRow>
      <TableCell style={{ color: "black" }}>{details.nickname}</TableCell>
      <TableCell style={{ color: "black" }}>{details.species}</TableCell>
      <TableCell style={{ color: "black" }} align="center">
        {details.h2oFrequency}
      </TableCell>

      <TableCell>
        <Button color="secondary" onClick={plantEdit}>
          Edit
        </Button>
      </TableCell>
      <TableCell>
        <Button color="secondary" onClick={handleYes}>
          Delete
        </Button>
      </TableCell>
    </TableRow>

    // <div>
    //   <h2>{details.nickname}</h2>
    //   <div>
    //     {details.image && <img href={details.image} alt={details.nickname} />}
    //     <div>
    //       <h4> {details.species}</h4>
    //       {details.h2oFrequency}
    //     </div>
    //   </div>
    //   {!confirmDelete ? (
    //     <div>
    //       <button onClick={plantEdit}>Edit</button>
    //       <button onClick={handleDelete}>Delete</button>
    //     </div>
    //   ) : (
    //     <div>
    //       <h2>Are you sure you want to remove this plant?</h2>
    //       <button onClick={handleYes}>Yes</button>
    //       <button onClick={handleNo}>No</button>
    //     </div>
    //   )}
    // </div>
  );
};

export default connect(null, { deletePlant })(Plant);
