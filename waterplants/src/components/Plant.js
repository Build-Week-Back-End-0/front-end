import React from "react";
import { useHistory } from "react-router";

const Plant = ({ details }) => {
  const { push } = useHistory();
  const plantEdit = () => push(`/plants/update/${details.plant_id}`);

  if (!details) {
    return <h3>Working on fetching your User&apos;s details</h3>;
  }

  return (
    <div>
      <h2>
        {details.nickname} {details.species} {details.h2oFrequency}
      </h2>
      <button>Delete</button>
      <button onClick={plantEdit}>Edit</button>
    </div>
  );
};

export default Plant;
