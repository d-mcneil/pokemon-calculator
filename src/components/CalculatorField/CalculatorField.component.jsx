import React from "react";
import { connect } from "react-redux";
import { convertStringToLabel as label } from "../../functions";
import { updateCalculatorField } from "../../redux/actions";
import { MAX_VALUE, MIN_VALUE } from "../../constantsNonRedux";

import "./CalculatorField.styles.scss";

const mapDispatchToProps = (dispatch) => ({
  updateCalculatorField: (...args) => dispatch(updateCalculatorField(...args)),
});

const CalculatorField = ({
  updateCalculatorField,
  defaultValue,
  fieldType, // baseStat, currentStat, iv, ev, natureModifier, level
  statName = "", // hp, attack, defense, specialAttack, specialDefense, speed, level
}) => {
  //
  // This part wrapped in comments is a bit confusing....
  // For some of the fieldTypes (iv, ev, and level), the max and min values are the same.
  // For others (base stats and current stats), the max and min values change depending on which stat is being used.
  // Thus, the max and min values for the fieldTypes in the 3rd line of this comment are nested one level
  // deeper in the MAX_VALUE and MIN_VALUE objects than the max and min values for the
  // stats in the 2nd line of this comment. This function figures out whether its necessary to go that
  // extra level into the MAX_VALUE and MIN_VALUE objects to derive the values.
  // While confusing, this approach is better than hard-coding the values.
  const setExtremeValue = (valuesObject) => {
    const valueField = valuesObject[`${fieldType}`];
    const statExtremeValue = valueField[`${statName}`];
    return statExtremeValue || statExtremeValue === 0
      ? statExtremeValue
      : valueField;
  };
  const maxValue = setExtremeValue(MAX_VALUE);
  const minValue = setExtremeValue(MIN_VALUE);
  //   const maxValue = MAX_VALUE[`${fieldType}`][`${statName}`]
  //     ? MAX_VALUE[`${fieldType}`][`${statName}`]
  //     : MAX_VALUE[`${fieldType}`];
  //   const minValue =
  //     MIN_VALUE[`${fieldType}`][`${statName}`] ||
  //     MIN_VALUE[`${fieldType}`][`${statName}`] === 0
  //       ? MIN_VALUE[`${fieldType}`][`${statName}`]
  //       : MIN_VALUE[`${fieldType}`];
  //
  //

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
      return;
      // don't calculate anything if a field is left blank
    }
    validateValues();
    updateCalculatorField(target.value, fieldType, statName);
  };

  const onBlur = (event) => {
    const target = event.target;
    let value = target.value;
    // eslint-disable-next-line
    if (value == 0) {
      target.value = minValue;
      // the minimum value will be placed in the field if the field is empty when clicked off of
    }
  };

  return (
    <>
      <input
        onChange={onChange}
        onBlur={onBlur}
        type={"number"}
        max={maxValue}
        min={minValue}
        defaultValue={defaultValue}
      ></input>
      <span>{label(statName)}</span>
      <br></br>
    </>
  );
};

export default connect(null, mapDispatchToProps)(CalculatorField);
