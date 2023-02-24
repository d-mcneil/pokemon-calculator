import React from "react";
import { connect } from "react-redux";
import { convertStringToLabel as label } from "../../functions";
import { updateCalculatorField } from "../../redux/actions";

import "./CalculatorField.styles.scss";

const mapDispatchToProps = (dispatch) => ({
  updateCalculatorField: (...args) => dispatch(updateCalculatorField(...args)),
});

const CalculatorField = ({
  updateCalculatorField,
  inputType = "number",
  maxValue = 252,
  minValue = 0,
  defaultValue,
  statLabel, // hp, attack, defense, specialAttack, specialDefense, speed, level
  fieldType, // baseStat, currentStat, iv, ev, natureModifier, level
}) => {
  const onChange = (event) => {
    const target = event.target;
    let value = target.value;
    const validateValues = () => {
      if (value < minValue) {
        target.value = minValue;
      } else if (value > maxValue) {
        target.value = maxValue;
      } else {
        target.value = Math.round(value);
      }
    };
    // eslint-disable-next-line
    if (value == 0) {
      // don't calculate anything if a field is left blank
      return;
    }
    validateValues();
    updateCalculatorField(fieldType, statLabel, target.value);
  };

  const onBlur = (event) => {
    // the minimum value will be placed in the field if the field is empty when clicked off of
    const target = event.target;
    let value = target.value;
    // eslint-disable-next-line
    if (value == 0) {
      target.value = minValue;
    }
  };

  return (
    <>
      <input
        onChange={onChange}
        onBlur={onBlur}
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
