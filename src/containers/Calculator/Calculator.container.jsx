import React, { Fragment } from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { updateCalculatorField, resetCalculator } from "../../redux/actions";
import { calculateField, setExtremeValue } from "../../functions";
import {
  FIELD_TYPE,
  STAT_NAME,
  SELECTOR_TYPE,
  MAX_VALUE,
  MIN_VALUE,
} from "../../constantsNonRedux";
import CalculatorField from "../../components/CalculatorField/CalculatorField.component";
import NatureSelector from "../../components/NatureSelector/NatureSelector.component";
import Button from "../../components/Button/Button.component";
import FieldTypeLabel from "../../components/FieldTypeLabel/FieldTypeLabel.component";
import FieldGroup from "../FieldGroup.container";
import "./Calculator.styles.scss";

const mapStateToProps = (state) => ({
  level: state.level.level,
  hp: state.hp,
  attack: state.attack,
  defense: state.defense,
  specialAttack: state.specialAttack,
  specialDefense: state.specialDefense,
  speed: state.speed,
  resetIndex: state.resetIndex.resetIndex,
});

const mapDispatchToProps = (dispatch) => ({
  handleUpdateCalculatorField: (payload, fieldType, statName) =>
    dispatch(updateCalculatorField(payload, fieldType, statName)),
  handleResetCalculator: () => dispatch(resetCalculator()),
});

const Calculator = ({
  level,
  hp,
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed,
  resetIndex,
  calculatedFieldType,
  handleUpdateCalculatorField,
  handleResetCalculator,
}) => {
  // have the navigation bar change which tab is highlighted according to which link is selected
  useEffect(() => {
    Array.from(document.getElementsByClassName("sidebar-item")).forEach(
      (element) => {
        if (element.className.includes("active")) {
          element.classList.remove("active");
        }
      }
    );
    document
      .getElementById(`${calculatedFieldType}-sidebar`)
      .classList.add("active");
  }, [calculatedFieldType]);

  const statArray = [hp, attack, defense, specialAttack, specialDefense, speed];
  const statNameArray = Object.keys(STAT_NAME);
  const fieldTypeArray = Object.keys(FIELD_TYPE).slice(1); // slice is used to remove 'level' from the array

  // this for loop makes it so that the fieldType that is to be calculated shows up as the final one on the page
  // it also removes the fieldType being calculated from the dependency array in the hooks below
  for (let i = 0; i < fieldTypeArray.length - 1; i++) {
    if (fieldTypeArray[i] === calculatedFieldType) {
      fieldTypeArray.push(fieldTypeArray.splice(i, 1)[0]);
      break;
    }
  }

  // reset input values if they are out of range because of switching calculators
  // this situation could happen if the output of a calculator is out of range, and then the user switches calculators without correcting the range error
  useEffect(() => {
    for (let i = 0; i < fieldTypeArray.slice(0, -1).length; i++) {
      // for all of the field types excluding the one that is currently being calculated, which has been placed at the end of the fieldTypeArray

      const fieldType = fieldTypeArray[i];
      if (fieldType === FIELD_TYPE.baseStat) {
        continue; // it's impossible for baseStat to be out of range because it is never calculated
      }

      for (let j = 0; j < statNameArray.length; j++) {
        // for each stat, checking it for each fieldType that is being iterated over
        const statValue = statArray[j][fieldType];
        const statName = statNameArray[j];
        const maxValue = setExtremeValue(MAX_VALUE, fieldType, statName);
        const minValue = setExtremeValue(MIN_VALUE, fieldType, statName);
        if (statValue > maxValue) {
          handleUpdateCalculatorField(maxValue, fieldType, statName);
        } else if (statValue < minValue) {
          handleUpdateCalculatorField(minValue, fieldType, statName);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calculatedFieldType]);

  const dependencyArrayHp = [
    level,
    hp[`${fieldTypeArray[0]}`],
    hp[`${fieldTypeArray[1]}`],
    hp[`${fieldTypeArray[2]}`],
  ];
  // recalculate hp... hp is not affected by nature, so forumla is different
  useEffect(() => {
    const result = calculateField(
      calculatedFieldType,
      true,
      level,
      hp.baseStat,
      hp.iv,
      hp.ev,
      hp.currentStat
    );
    handleUpdateCalculatorField(
      result.value,
      calculatedFieldType,
      STAT_NAME.hp
    );
    if (result.maxValue) {
      handleUpdateCalculatorField(
        result.maxValue,
        `${calculatedFieldType}Max`,
        STAT_NAME.hp
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencyArrayHp]);

  // custom hook
  const useCalculateField = (stat, level, fieldType, statName) => {
    const dependencyArray = [
      level,
      stat[`${fieldTypeArray[0]}`],
      stat[`${fieldTypeArray[1]}`],
      stat[`${fieldTypeArray[2]}`],
      stat.natureModifier,
    ];
    return useEffect(() => {
      const result = calculateField(
        calculatedFieldType,
        false,
        level,
        stat.baseStat,
        stat.iv,
        stat.ev,
        stat.currentStat,
        stat.natureModifier
      );
      handleUpdateCalculatorField(result.value, fieldType, statName);
      if (result.maxValue) {
        handleUpdateCalculatorField(
          result.maxValue,
          `${fieldType}Max`,
          statName
        );
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...dependencyArray]);
  };
  // recalculate other stats using custom hook
  useCalculateField(attack, level, calculatedFieldType, STAT_NAME.attack);
  useCalculateField(defense, level, calculatedFieldType, STAT_NAME.defense);
  useCalculateField(
    specialAttack,
    level,
    calculatedFieldType,
    STAT_NAME.specialAttack
  );
  useCalculateField(
    specialDefense,
    level,
    calculatedFieldType,
    STAT_NAME.specialDefense
  );
  useCalculateField(speed, level, calculatedFieldType, STAT_NAME.speed);

  const renderCalculatorFields = () => {
    return fieldTypeArray.map((fieldType) => {
      const valueIsCalculated =
        fieldType === calculatedFieldType ? true : false; // if the value is calculated, then it has a more complex key and the input field is read-only
      return (
        <Fragment key={`${fieldType}-fragment`}>
          <FieldTypeLabel fieldType={fieldType} key={`${fieldType}-label`} />
          <FieldGroup
            fieldType={fieldType}
            valueIsCalculated={valueIsCalculated}
            key={`${fieldType}-group`}
          />
        </Fragment>
      );
    });
  };

  return (
    <main className="calculator-container">
      <Button
        onClick={handleResetCalculator}
        text={"Reset Calculator"}
        key={"reset-calculator"}
      />
      <NatureSelector key={`${resetIndex}-${SELECTOR_TYPE.nature}`} />
      <FieldTypeLabel
        fieldType={FIELD_TYPE.level}
        key={`${FIELD_TYPE.level}-label`}
      />
      <CalculatorField
        key={`${resetIndex}-${FIELD_TYPE.level}`}
        defaultValue={level}
        fieldType={FIELD_TYPE.level}
      />
      {renderCalculatorFields()}
    </main>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
