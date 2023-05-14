import React from "react";
import { connect } from "react-redux";
import { updateCalculatorField } from "../redux/actions";
import { MAX_VALUE, MIN_VALUE } from "../constantsNonRedux";
import { setExtremeValue } from "../functions";

const mapDispatchToProps = (dispatch) => ({
  updateCalculatorField: (payload, fieldType, statName) =>
    dispatch(updateCalculatorField(Number(payload), fieldType, statName)),
});

const CalculatorField = ({
  updateCalculatorField,
  defaultValue,
  valueIsCalculated = false,
  fieldType, // baseStat, currentStat, iv, ev, level
  statName = "", // hp, attack, defense, specialAttack, specialDefense, speed
  id,
}) => {
  const maxValue = setExtremeValue(MAX_VALUE, fieldType, statName);
  const minValue = setExtremeValue(MIN_VALUE, fieldType, statName);

  const handleChange = valueIsCalculated
    ? undefined
    : (event) => {
        const target = event.target;
        let value = target.value;
        const validateValues = () => {
          if (value > maxValue) {
            target.value = maxValue;
          } else {
            target.value = Math.round(value);
          }
        };
        // eslint-disable-next-line
        if (value === "" || value < minValue) {
          return;
          // don't calculate anything if a field is left blank or the input is below the min value
        }
        validateValues();
        updateCalculatorField(target.value, fieldType, statName);
      };

  const handleBlur = valueIsCalculated
    ? undefined
    : (event) => {
        const target = event.target;
        let value = target.value;
        // eslint-disable-next-line
        if (value === "" || value < minValue) {
          target.value = minValue;
          // the minimum value will be placed in the field if the field is empty or if the input is below the min value
          updateCalculatorField(target.value, fieldType, statName);
        } else if (value > maxValue) {
          target.value = maxValue;
          updateCalculatorField(target.value, fieldType, statName);
        }
      };

  return (
    <input
      className="calculator-field"
      id={id}
      onChange={handleChange}
      onBlur={handleBlur}
      type={"number"}
      max={maxValue}
      min={minValue}
      defaultValue={defaultValue}
      readOnly={valueIsCalculated}
    ></input>
  );
};

export default connect(null, mapDispatchToProps)(CalculatorField);
