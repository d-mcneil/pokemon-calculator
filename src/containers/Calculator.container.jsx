import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { updateCalculatorField, resetCalculator } from "../redux/actions";
import { convertStringToLabel as label, calculateField } from "../functions";
import { FIELD_TYPE, STAT_NAME, SELECTOR_TYPE } from "../constantsNonRedux";
import CalculatorField from "../components/CalculatorField/CalculatorField.component";
import NatureSelector from "../components/NatureSelector/NatureSelector.component";
import Button from "../components/Button/Button.component";

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
  const fieldTypeArray = Object.keys(FIELD_TYPE).slice(1); // slice is used to remove 'level' from the array
  // this for loop makes it so that the fieldType that is to be calculated shows up as the final one
  // it also removes the fieldType being calculated from the dependency array in the hooks directly below
  for (let i = 0; i < fieldTypeArray.length - 1; i++) {
    if (fieldTypeArray[i] === calculatedFieldType) {
      fieldTypeArray.push(fieldTypeArray.splice(i, 1)[0]);
      break;
    }
  }

  const dependencyArrayHp = [
    level,
    hp[`${fieldTypeArray[0]}`],
    hp[`${fieldTypeArray[1]}`],
    hp[`${fieldTypeArray[2]}`],
  ];
  // recalculate hp... hp is not affected by nature, so forumla is different
  useEffect(() => {
    handleUpdateCalculatorField(
      calculateField(
        calculatedFieldType,
        true,
        level,
        hp.baseStat,
        hp.iv,
        hp.ev,
        hp.currentStat
      ),
      calculatedFieldType,
      STAT_NAME.hp
    );
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
      handleUpdateCalculatorField(
        calculateField(
          calculatedFieldType,
          false,
          level,
          stat.baseStat,
          stat.iv,
          stat.ev,
          stat.currentStat,
          stat.natureModifier
        ),
        fieldType,
        statName
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...dependencyArray]);
  };

  // recalculate other stats
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
    const statArray = [
      hp,
      attack,
      defense,
      specialAttack,
      specialDefense,
      speed,
    ];
    const statNameArray = Object.keys(STAT_NAME);

    return (
      <>
        <CalculatorField
          key={`${resetIndex}-${FIELD_TYPE.level}`}
          defaultValue={level}
          fieldType={FIELD_TYPE.level}
        />
        {fieldTypeArray.map((fieldType) => {
          // adding a CalculatorField for every fieldType for every statName --- requires nested map functions
          const valueIsCalculated =
            fieldType === calculatedFieldType ? true : false; // if the value is calculated, then it has a more complex key and the input field is read-only

          return (
            <>
              <br></br>
              {label(fieldType)}
              <br></br>
              {statNameArray.map((statName) => {
                const index = statNameArray.indexOf(statName);
                const defaultValue = statArray[index][fieldType]; // the (numerical) value of stat.fieldType --- examples: hp.currentStat, defense.iv, specialAttack.ev
                const key = `${resetIndex}-${fieldType}-${statName}${
                  valueIsCalculated ? `-${defaultValue}` : ""
                  // the defaultValue tag is added to the key if it is calculated so that it will rerender every time its value is changed
                  // the resetIndex tag is added to the key so that it rerenders if the calculator is reset
                }`;

                return (
                  <CalculatorField
                    key={key}
                    defaultValue={defaultValue}
                    fieldType={fieldType}
                    statName={statName}
                    valueIsCalculated={valueIsCalculated}
                  />
                );
              })}
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      <Button onClick={handleResetCalculator} text={"Reset Calculator"} />
      <br></br>
      <br></br>
      <NatureSelector key={`${resetIndex}-${SELECTOR_TYPE.nature}`} />
      <br></br>
      <br></br>
      Level
      <br></br>
      {renderCalculatorFields()}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
