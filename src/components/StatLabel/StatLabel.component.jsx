import React from "react";
import { convertStringToLabel as label } from "../../functions";
import "./StatLabel.styles.scss";

const StatLabel = ({ statName, labelIsFor }) => {
  return (
    <label className="calculator-field-label" htmlFor={labelIsFor}>
      {label(statName)}
    </label>
  );
};

export default StatLabel;
