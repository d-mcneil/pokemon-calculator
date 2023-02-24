import React from "react";

import "./CalculatorField.styles.scss";

const CalculatorField = ({
  type = "number",
  maxValue = 252,
  minValue = 0,
  statLabel,
}) => {
  return (
    <>
      <input type={type} max={maxValue} min={minValue}></input>
      <span>{statLabel}</span>
      <br></br>
    </>
  );
};

export default CalculatorField;
