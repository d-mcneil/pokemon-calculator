import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { updateCalculatorField, resetCalculator } from "../redux/actions";
import {
  calculateCurrentStat,
  convertStringToLabel as label,
} from "../functions";
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
  calculatedFieldType = "currentStat", // ***************** will move this to the browser router component in the future, currentState is for development purposes
  handleUpdateCalculatorField,
  handleResetCalculator,
}) => {
  //

  useEffect(() => {
    // recalculate hp
    handleUpdateCalculatorField(
      calculateCurrentStat(true, level, hp.baseStat, hp.iv, hp.ev),
      FIELD_TYPE.currentStat,
      STAT_NAME.hp
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level, hp.ev, hp.iv, hp.baseStat]);

  const useCalculateCurrentStat = (stat, level, fieldType, statName) => {
    // custom hook
    //recalculate other stats
    return useEffect(() => {
      handleUpdateCalculatorField(
        calculateCurrentStat(
          false,
          level,
          stat.baseStat,
          stat.iv,
          stat.ev,
          stat.natureModifier
        ),
        fieldType,
        statName
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [level, stat.ev, stat.iv, stat.baseStat, stat.natureModifier]);
  };

  //prettier-ignore
  useCalculateCurrentStat(attack, level, FIELD_TYPE.currentStat, STAT_NAME.attack);
  //prettier-ignore
  useCalculateCurrentStat(defense, level, FIELD_TYPE.currentStat, STAT_NAME.defense);
  //prettier-ignore
  useCalculateCurrentStat(specialAttack, level, FIELD_TYPE.currentStat, STAT_NAME.specialAttack);
  //prettier-ignore
  useCalculateCurrentStat(specialDefense, level, FIELD_TYPE.currentStat, STAT_NAME.specialDefense);
  //prettier-ignore
  useCalculateCurrentStat(speed, level, FIELD_TYPE.currentStat, STAT_NAME.speed);

  const renderCalculatorFields = () => {
    // prettier-ignore
    const statArray = [ hp, attack, defense, specialAttack, specialDefense, speed];
    const fieldTypeArray = Object.keys(FIELD_TYPE);
    const statNameArray = Object.keys(STAT_NAME);

    return (
      <>
        <CalculatorField
          key={`${resetIndex}-${FIELD_TYPE.level}`}
          defaultValue={level}
          fieldType={FIELD_TYPE.level}
        />
        {fieldTypeArray.slice(1).map((fieldType) => {
          // adding a CalculatorField for every fieldType for every statName --- requires nested map functions
          // slicing because hp is not affected by nature and it is the first item in the array
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
                  valueIsCalculated ? `-${defaultValue}` : "" // the default value tag is added to the key if it is calculated so that it will rerender every time its value is changed
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
