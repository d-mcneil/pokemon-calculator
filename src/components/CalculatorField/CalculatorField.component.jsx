import React from "react";
import { connect } from "react-redux";
import { convertStringToLabel as label } from "../../functions";
import { updateCalculatorField } from "../../redux/actions";

import "./CalculatorField.styles.scss";

const mapDispatchToProps = (dispatch) => ({
  onChange: (...args) => dispatch(updateCalculatorField(...args)),
});

const CalculatorField = ({
  onChange,
  inputType = "number",
  maxValue = 252,
  minValue = 0,
  defaultValue,
  statLabel, // hp, attack, defense, specialAttack, specialDefense, speed, level
  fieldType, // baseStat, currentStat, iv, ev, natureModifier, level
}) => {
  return (
    <>
      <input
        onChange={(event) => onChange(fieldType, statLabel, event.target.value)}
        type={inputType}
        max={maxValue}
        min={minValue}
        defaultValue={defaultValue}
      ></input>
      <span>{label(statLabel)}</span>
      <br></br>
    </>
  );
};

export default connect(null, mapDispatchToProps)(CalculatorField);
