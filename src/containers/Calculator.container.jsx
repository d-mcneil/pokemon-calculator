import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { FIELD_TYPE, STAT_NAME } from "../constantsNonRedux";
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
  //   useEffect(() => {}, [level, hp.ev, hp.iv, hp.baseStat]);
  //   useEffect(() => {}, [level, attack.ev, attach.iv, attack.baseStat attack.natureModifier]);

  //  calculating stats

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
      <CalculatorField defaultValue={level} fieldType={FIELD_TYPE.level} />
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
      />
      <CalculatorField
        defaultValue={defense.natureModifier}
        fieldType={FIELD_TYPE.natureModifier}
        statName={STAT_NAME.defense}
      />
      <CalculatorField
        defaultValue={specialAttack.natureModifier}
        fieldType={FIELD_TYPE.natureModifier}
        statName={STAT_NAME.specialAttack}
      />
      <CalculatorField
        defaultValue={specialDefense.natureModifier}
        fieldType={FIELD_TYPE.natureModifier}
        statName={STAT_NAME.specialDefense}
      />
      <CalculatorField
        defaultValue={speed.natureModifier}
        fieldType={FIELD_TYPE.natureModifier}
        statName={STAT_NAME.speed}
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
      />
      <CalculatorField
        defaultValue={attack.currentStat}
        fieldType={FIELD_TYPE.currentStat}
        statName={STAT_NAME.attack}
      />
      <CalculatorField
        defaultValue={defense.currentStat}
        fieldType={FIELD_TYPE.currentStat}
        statName={STAT_NAME.defense}
      />
      <CalculatorField
        defaultValue={specialAttack.currentStat}
        fieldType={FIELD_TYPE.currentStat}
        statName={STAT_NAME.specialAttack}
      />
      <CalculatorField
        defaultValue={specialDefense.currentStat}
        fieldType={FIELD_TYPE.currentStat}
        statName={STAT_NAME.specialDefense}
      />
      <CalculatorField
        defaultValue={speed.currentStat}
        fieldType={FIELD_TYPE.currentStat}
        statName={STAT_NAME.speed}
      />
    </>
  );
};

export default connect(mapStateToProps)(Calculator);
