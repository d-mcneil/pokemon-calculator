import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { FIELD_TYPE, STAT_NAME } from "../constantsNonRedux";
import { updateCalculatorField } from "../redux/actions";
import CalculatorField from "../components/CalculatorField/CalculatorField.component";
import { calculateCurrentStat, convertStringToLabel } from "../functions";

const mapStateToProps = (state) => ({
  level: state.level.level,
  hp: state.hp,
  attack: state.attack,
  defense: state.defense,
  specialAttack: state.specialAttack,
  specialDefense: state.specialDefense,
  speed: state.speed,
});

const mapDispatchToProps = (dispatch) => ({
  updateStat: (...args) => dispatch(updateCalculatorField(...args)),
});

const Calculator = ({
  level,
  hp,
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed,
  calculatedFieldType = "currentStat", // ***************** will move this to the browser router component in the future, currentState is for development purposes
  updateStat,
}) => {
  //

  useEffect(() => {
    // recalculate hp
    updateStat(
      calculateCurrentStat(true, level, hp.baseStat, hp.iv, hp.ev),
      FIELD_TYPE.currentStat,
      STAT_NAME.hp
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level, hp.ev, hp.iv, hp.baseStat]);

  const useCalculateCurrentStat = (stat, level, fieldType, statName) => {
    //recalculate other stats
    return useEffect(() => {
      updateStat(
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
    const fieldTypeArray = Object.keys(FIELD_TYPE);
    const statNameArray = Object.keys(STAT_NAME);
    // prettier-ignore
    const statArray = [ hp, attack, defense, specialAttack, specialDefense, speed];
    return (
      <>
        {" "}
        <CalculatorField
          key={FIELD_TYPE.level}
          defaultValue={level}
          fieldType={FIELD_TYPE.level}
        />
        {/* adding a field for every fieldType for every stat */}
        {fieldTypeArray.slice(1).map((fieldType) => {
          const valueIsCalculated =
            fieldType === calculatedFieldType ? true : false; // if the value is calculated, then it has a more complex key and the input field is read-only
          return (
            <>
              <br></br>
              {convertStringToLabel(fieldType)}
              <br></br>
              {statNameArray.map((statName) => {
                const index = statNameArray.indexOf(statName);
                const defaultValue = statArray[index][fieldType]; // the (numerical) value of stat.fieldType --- examples: hp.currentStat, defense.iv, specialAttack.ev
                const key = `${fieldType}-${statName}${
                  valueIsCalculated ? `-${defaultValue}` : "" // the default value tag is added to the key if it is calculated so that it will rerender every time its value is changed
                }`;
                return (
                  <>
                    <CalculatorField
                      key={key}
                      defaultValue={defaultValue}
                      fieldType={fieldType}
                      statName={statName}
                      valueIsCalculated={valueIsCalculated}
                    />
                  </>
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
      Level<br></br>
      {renderCalculatorFields()}
      {/* <NatureSelector /> */}
      {/* <br></br>EVs<br></br>
      <CalculatorField
        defaultValue={hp.ev}
        fieldType={FIELD_TYPE.ev}
        statName={STAT_NAME.hp}
      />
      <CalculatorField
        defaultValue={attack.ev}
        fieldType={FIELD_TYPE.ev}
        statName={STAT_NAME.attack}
      />
      <CalculatorField
        defaultValue={defense.ev}
        fieldType={FIELD_TYPE.ev}
        statName={STAT_NAME.defense}
      />
      <CalculatorField
        defaultValue={specialAttack.ev}
        fieldType={FIELD_TYPE.ev}
        statName={STAT_NAME.specialAttack}
      />
      <CalculatorField
        defaultValue={specialDefense.ev}
        fieldType={FIELD_TYPE.ev}
        statName={STAT_NAME.specialDefense}
      />
      <CalculatorField
        defaultValue={speed.ev}
        fieldType={FIELD_TYPE.ev}
        statName={STAT_NAME.speed}
      />
      <br></br>IVs<br></br>
      <CalculatorField
        defaultValue={hp.iv}
        fieldType={FIELD_TYPE.iv}
        statName={STAT_NAME.hp}
      />
      <CalculatorField
        defaultValue={attack.iv}
        fieldType={FIELD_TYPE.iv}
        statName={STAT_NAME.attack}
      />
      <CalculatorField
        defaultValue={defense.iv}
        fieldType={FIELD_TYPE.iv}
        statName={STAT_NAME.defense}
      />
      <CalculatorField
        defaultValue={specialAttack.iv}
        fieldType={FIELD_TYPE.iv}
        statName={STAT_NAME.specialAttack}
      />
      <CalculatorField
        defaultValue={specialDefense.iv}
        fieldType={FIELD_TYPE.iv}
        statName={STAT_NAME.specialDefense}
      />
      <CalculatorField
        defaultValue={speed.iv}
        fieldType={FIELD_TYPE.iv}
        statName={STAT_NAME.speed}
      />
      <br></br>Base Stats<br></br>
      <CalculatorField
        defaultValue={hp.baseStat}
        fieldType={FIELD_TYPE.baseStat}
        statName={STAT_NAME.hp}
      />
      <CalculatorField
        defaultValue={attack.baseStat}
        fieldType={FIELD_TYPE.baseStat}
        statName={STAT_NAME.attack}
      />
      <CalculatorField
        defaultValue={defense.baseStat}
        fieldType={FIELD_TYPE.baseStat}
        statName={STAT_NAME.defense}
      />
      <CalculatorField
        defaultValue={specialAttack.baseStat}
        fieldType={FIELD_TYPE.baseStat}
        statName={STAT_NAME.specialAttack}
      />
      <CalculatorField
        defaultValue={specialDefense.baseStat}
        fieldType={FIELD_TYPE.baseStat}
        statName={STAT_NAME.specialDefense}
      />
      <CalculatorField
        defaultValue={speed.baseStat}
        fieldType={FIELD_TYPE.baseStat}
        statName={STAT_NAME.speed}
      />
      <br></br>Current Stats<br></br>
      <CalculatorField
        key={`${hp.currentStat}-${hp.speed}`}
        defaultValue={hp.currentStat}
        fieldType={FIELD_TYPE.currentStat}
        statName={STAT_NAME.hp}
        valueIsCalculated
      />
      <CalculatorField
        key={`${attack.currentStat}-${STAT_NAME.attack}`}
        defaultValue={attack.currentStat}
        fieldType={FIELD_TYPE.currentStat}
        statName={STAT_NAME.attack}
        valueIsCalculated
      />
      <CalculatorField
        key={`${defense.currentStat}-${STAT_NAME.defense}`}
        defaultValue={defense.currentStat}
        fieldType={FIELD_TYPE.currentStat}
        statName={STAT_NAME.defense}
        valueIsCalculated
      />
      <CalculatorField
        key={`${specialAttack.currentStat}-${STAT_NAME.specialAttack}`}
        defaultValue={specialAttack.currentStat}
        fieldType={FIELD_TYPE.currentStat}
        statName={STAT_NAME.specialAttack}
        valueIsCalculated
      />
      <CalculatorField
        key={`${specialDefense.currentStat}-${STAT_NAME.specialDefense}`}
        defaultValue={specialDefense.currentStat}
        fieldType={FIELD_TYPE.currentStat}
        statName={STAT_NAME.specialDefense}
        valueIsCalculated
      />
      <CalculatorField
        key={`${speed.currentStat}-${STAT_NAME.speed}`}
        defaultValue={speed.currentStat}
        fieldType={FIELD_TYPE.currentStat}
        statName={STAT_NAME.speed}
        valueIsCalculated
      /> */}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
