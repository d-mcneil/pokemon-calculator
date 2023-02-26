import React from "react";
import { convertStringToLabel as label } from "../../functions";
import "./StatLabel.styles.scss";

const StatLabel = ({ statName }) => {
  return (
    <>
      <span>{label(statName)}</span>
      <br></br>
    </>
  );
};

export default StatLabel;
