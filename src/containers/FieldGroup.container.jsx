import React from "react";
import { connect } from "react-redux";
import {
  FIELD_TYPE,
  MAX_VALUE,
  MIN_VALUE,
  STAT_NAME,
} from "../constantsNonRedux";
import { setExtremeValue } from "../functions";
import CalculatorField from "../components/CalculatorField.component";
import StatLabel from "../components/StatLabel.component";

const mapStateToProps = (state) => ({
  resetIndex: state.resetIndex.resetIndex,
  hp: state.hp,
  attack: state.attack,
  defense: state.defense,
  specialAttack: state.specialAttack,
  specialDefense: state.specialDefense,
  speed: state.speed,
  pokemonName: state.pokemon.pokemon,
});

const FieldGroup = ({
  fieldType,
  resetIndex,
  valueIsCalculated,
  hp,
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed,
  pokemonName,
}) => {
  const statArray = [hp, attack, defense, specialAttack, specialDefense, speed];
  const statNameArray = Object.keys(STAT_NAME);

  const renderMaxIvOrEvFields = (statName, maxValue, minValue, index) => {
    if (
      valueIsCalculated &&
      (fieldType === FIELD_TYPE.ev || fieldType === FIELD_TYPE.iv)
    ) {
      const value = statArray[index][`${fieldType}Max`]; // the numerical value of stat.evMax or stat.ivMax
      const defaultValue =
        value > maxValue ? maxValue : value < minValue ? minValue : value;
      const key = `${resetIndex}-${fieldType}-${statName}-max-${defaultValue}`;

      return (
        <>
          <p className="min-max-calculator-field-separator">-</p>
          <CalculatorField
            valueIsCalculated={valueIsCalculated}
            key={key}
            defaultValue={defaultValue}
            fieldType={fieldType}
            statName={statName}
          />
        </>
      );
    } else {
      return;
    }
  };

  return statNameArray.map((statName) => {
    const index = statNameArray.indexOf(statName);
    const statValue = statArray[index][fieldType]; // the (numerical) value of stat.fieldType --- examples: hp.currentStat, defense.iv, specialAttack.ev
    const maxValue = setExtremeValue(MAX_VALUE, fieldType, statName);
    const minValue = setExtremeValue(MIN_VALUE, fieldType, statName);
    const defaultValue = //
      valueIsCalculated // if the value is calculated...
        ? statValue < minValue // if the calculated value is below the min value...
          ? minValue // return the min value instead of the calculated value
          : statValue > maxValue // else if the calculated value is above the max value...
          ? maxValue // return the max value instead of the the calculated value
          : statValue // else return the calculated value, because it is valid
        : statValue; // else the value is NOT calculated, so return the current value of the stat
    const aboveRange = defaultValue > maxValue;
    const belowRange = defaultValue < minValue;
    const key = `${resetIndex}-${fieldType}-${statName}
    ${
      fieldType === FIELD_TYPE.baseStat ? `-${pokemonName}` : ""
      // this line is added so that the baseStat fields reset every time that the PokemonSelector is used to select a new pokemon
    }
    ${
      valueIsCalculated
        ? `-${defaultValue}`
        : aboveRange || belowRange
        ? "-will-be-reset"
        : ""
      // the defaultValue tag is added to the key if it is calculated so that it will rerender every time its value is changed

      // the resetIndex tag is added to the key so that it rerenders if the calculator is reset

      // the continuation of the ternary after default value is to generate a key that tags a value to be reset
      // this situation would occur if, when calculating a value, that value is out of range, and then the user switches calculators without fixing the out of range value
      // one of the useEffect hooks will catch this and reset the value when the calculator component remounts
    }`;
    const fieldId = `calculator-field-${fieldType}-${statName}`;

    return (
      <div
        className="calculator-field-wrapper"
        key={`calculator-field-label-wrapper-${fieldType}-${statName}`}
      >
        <CalculatorField
          key={key}
          defaultValue={defaultValue}
          fieldType={fieldType}
          statName={statName}
          valueIsCalculated={valueIsCalculated}
          id={fieldId}
        />
        {renderMaxIvOrEvFields(statName, maxValue, minValue, index)}
        <StatLabel
          statName={statName}
          key={`${fieldType}-${statName}-label`}
          labelIsFor={fieldId}
        />
      </div>
    );
  });
};

export default connect(mapStateToProps)(FieldGroup);
