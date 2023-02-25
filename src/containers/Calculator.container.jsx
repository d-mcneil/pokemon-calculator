import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import {
  FIELD_TYPE,
  STAT_NAME,
  //   MAX_VALUE,
  //   MIN_VALUE,
} from "../constantsNonRedux";
import CalculatorField from "../components/CalculatorField/CalculatorField.component";

const mapStateToProps = (state) => ({
  level: state.level.level,
  hp: state.hp,
  attack: state.attack,
  defense: state.defense,
  specialAttack: state.specialAttack,
  specialDefense: state.specialDefense,
  speed: state.speed,
});

const Calculator = ({
  level,
  hp,
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed,
}) => {
  //   // recalculate everything
  //   useEffect(() => {}, [level]);

  //   // recalculate changed stats only
  //   useEffect(() => {}, []);
  //   useEffect(() => {}, []);

  //   // recalculate ev and iv
  //   useEffect(() => {}, []);

  //   // recalculate iv and current stat
  //   useEffect(() => {}, []);

  //   // recalculate ev and current stat
  //   useEffect(() => {}, []);

  return (
    <>
      Level<br></br>
      <CalculatorField
        fieldType={FIELD_TYPE.level}
        // maxValue={MAX_VALUE.level}
        // minValue={MIN_VALUE.level}
        defaultValue={level}
      />
      <br></br>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* Nature Modifier<br></br> */}
      {/*  */}
      {/* <CalculatorField
        defaultValue={attack.natureModifier}
        fieldType={FIELD_TYPE.natureModifier}
        statName={STAT_NAME.attack}
        maxValue={1.1}
        minValue={0.9}
      />
      <CalculatorField
        defaultValue={defense.natureModifier}
        fieldType={FIELD_TYPE.natureModifier}
        statName={STAT_NAME.defense}
        maxValue={1.1}
        minValue={0.9}
      />
      <CalculatorField
        defaultValue={specialAttack.natureModifier}
        fieldType={FIELD_TYPE.natureModifier}
        statName={STAT_NAME.specialAttack}
        maxValue={1.1}
        minValue={0.9}
      />
      <CalculatorField
        defaultValue={specialDefense.natureModifier}
        fieldType={FIELD_TYPE.natureModifier}
        statName={STAT_NAME.specialDefense}
        maxValue={1.1}
        minValue={0.9}
      />
      <CalculatorField
        defaultValue={speed.natureModifier}
        fieldType={FIELD_TYPE.natureModifier}
        statName={STAT_NAME.speed}
        maxValue={1.1}
        minValue={0.9}
      /> */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <br></br>EVs<br></br>
      <CalculatorField
        defaultValue={hp.ev}
        fieldType={FIELD_TYPE.ev}
        statName={STAT_NAME.hp}
        // maxValue={MAX_VALUE.ev}
        // minValue={MIN_VALUE.ev}
      />
      <CalculatorField
        defaultValue={attack.ev}
        fieldType={FIELD_TYPE.ev}
        statName={STAT_NAME.attack}
        // maxValue={MAX_VALUE.ev}
        // minValue={MIN_VALUE.ev}
      />
      <CalculatorField
        defaultValue={defense.ev}
        fieldType={FIELD_TYPE.ev}
        statName={STAT_NAME.defense}
        // maxValue={MAX_VALUE.ev}
        // minValue={MIN_VALUE.ev}
      />
      <CalculatorField
        defaultValue={specialAttack.ev}
        fieldType={FIELD_TYPE.ev}
        statName={STAT_NAME.specialAttack}
        // maxValue={MAX_VALUE.ev}
        // minValue={MIN_VALUE.ev}
      />
      <CalculatorField
        defaultValue={specialDefense.ev}
        fieldType={FIELD_TYPE.ev}
        statName={STAT_NAME.specialDefense}
        // maxValue={MAX_VALUE.ev}
        // minValue={MIN_VALUE.ev}
      />
      <CalculatorField
        defaultValue={speed.ev}
        fieldType={FIELD_TYPE.ev}
        statName={STAT_NAME.speed}
        // maxValue={MAX_VALUE.ev}
        // minValue={MIN_VALUE.ev}
      />
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <br></br>IVs<br></br>
      <CalculatorField
        defaultValue={hp.iv}
        fieldType={FIELD_TYPE.iv}
        statName={STAT_NAME.hp}
        // maxValue={MAX_VALUE.iv}
        // minValue={MIN_VALUE.iv}
      />
      <CalculatorField
        defaultValue={attack.iv}
        fieldType={FIELD_TYPE.iv}
        statName={STAT_NAME.attack}
        // maxValue={MAX_VALUE.iv}
        // minValue={MIN_VALUE.iv}
      />
      <CalculatorField
        defaultValue={defense.iv}
        fieldType={FIELD_TYPE.iv}
        statName={STAT_NAME.defense}
        // maxValue={MAX_VALUE.iv}
        // minValue={MIN_VALUE.iv}
      />
      <CalculatorField
        defaultValue={specialAttack.iv}
        fieldType={FIELD_TYPE.iv}
        statName={STAT_NAME.specialAttack}
        // maxValue={MAX_VALUE.iv}
        // minValue={MIN_VALUE.iv}
      />
      <CalculatorField
        defaultValue={specialDefense.iv}
        fieldType={FIELD_TYPE.iv}
        statName={STAT_NAME.specialDefense}
        // maxValue={MAX_VALUE.iv}
        // minValue={MIN_VALUE.iv}
      />
      <CalculatorField
        defaultValue={speed.iv}
        fieldType={FIELD_TYPE.iv}
        statName={STAT_NAME.speed}
        // maxValue={MAX_VALUE.iv}
        // minValue={MIN_VALUE.iv}
      />
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <br></br>Base Stats<br></br>
      <CalculatorField
        defaultValue={hp.baseStat}
        fieldType={FIELD_TYPE.baseStat}
        statName={STAT_NAME.hp}
        // maxValue={MAX_VALUE.baseStat.hp}
        // minValue={MIN_VALUE.baseStat.hp}
      />
      <CalculatorField
        defaultValue={attack.baseStat}
        fieldType={FIELD_TYPE.baseStat}
        statName={STAT_NAME.attack}
        // maxValue={MAX_VALUE.baseStat.attack}
        // minValue={MIN_VALUE.baseStat.attack}
      />
      <CalculatorField
        defaultValue={defense.baseStat}
        fieldType={FIELD_TYPE.baseStat}
        statName={STAT_NAME.defense}
        // maxValue={MAX_VALUE.baseStat.defense}
        // minValue={MIN_VALUE.baseStat.defense}
      />
      <CalculatorField
        defaultValue={specialAttack.baseStat}
        fieldType={FIELD_TYPE.baseStat}
        statName={STAT_NAME.specialAttack}
        // maxValue={MAX_VALUE.baseStat.specialAttack}
        // minValue={MIN_VALUE.baseStat.specialAttack}
      />
      <CalculatorField
        defaultValue={specialDefense.baseStat}
        fieldType={FIELD_TYPE.baseStat}
        statName={STAT_NAME.specialDefense}
        // maxValue={MAX_VALUE.baseStat.specialDefense}
        // minValue={MIN_VALUE.baseStat.specialDefense}
      />
      <CalculatorField
        defaultValue={speed.baseStat}
        fieldType={FIELD_TYPE.baseStat}
        statName={STAT_NAME.speed}
        // maxValue={MAX_VALUE.baseStat.speed}
        // minValue={MIN_VALUE.baseStat.speed}
      />
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <br></br>Current Stats<br></br>
      <CalculatorField
        defaultValue={hp.currentStat}
        fieldType={FIELD_TYPE.currentStat}
        statName={STAT_NAME.hp}
        // maxValue={MAX_VALUE.currentStat.hp}
        // minValue={MIN_VALUE.currentStat.hp}
      />
      <CalculatorField
        defaultValue={attack.currentStat}
        fieldType={FIELD_TYPE.currentStat}
        statName={STAT_NAME.attack}
        // maxValue={MAX_VALUE.currentStat.attack}
        // minValue={MIN_VALUE.currentStat.attack}
      />
      <CalculatorField
        defaultValue={defense.currentStat}
        fieldType={FIELD_TYPE.currentStat}
        statName={STAT_NAME.defense}
        // maxValue={MAX_VALUE.currentStat.defense}
        // minValue={MIN_VALUE.currentStat.defense}
      />
      <CalculatorField
        defaultValue={specialAttack.currentStat}
        fieldType={FIELD_TYPE.currentStat}
        statName={STAT_NAME.specialAttack}
        // maxValue={MAX_VALUE.currentStat.specialAttack}
        // minValue={MIN_VALUE.currentStat.specialAttack}
      />
      <CalculatorField
        defaultValue={specialDefense.currentStat}
        fieldType={FIELD_TYPE.currentStat}
        statName={STAT_NAME.specialDefense}
        // maxValue={MAX_VALUE.currentStat.specialDefense}
        // minValue={MIN_VALUE.currentStat.specialDefense}
      />
      <CalculatorField
        defaultValue={speed.currentStat}
        fieldType={FIELD_TYPE.currentStat}
        statName={STAT_NAME.speed}
        // maxValue={MAX_VALUE.currentStat.speed}
        // minValue={MIN_VALUE.currentStat.speed}
      />
    </>
  );
};

export default connect(mapStateToProps)(Calculator);
