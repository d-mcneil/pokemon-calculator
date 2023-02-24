import React from "react";
import { connect } from "react-redux";
import CalculatorField from "../components/CalculatorField/CalculatorField.component";

const mapStateToProps = (state) => ({
  iv: state.iv,
  ev: state.ev,
  baseStat: state.baseStat,
  currentStat: state.currentStat,
});

const Calculator = ({ iv, ev, baseStat, currentStat }) => {
  return (
    <>
      level<br></br>
      <CalculatorField statLabel={"level"} maxValue={100} minValue={1} />
      <br></br>
      evs<br></br>
      {/*  */}
      <CalculatorField defaultValue={ev.hp} fieldType={"ev"} statLabel={"hp"} />
      <CalculatorField
        defaultValue={ev.attack}
        fieldType={"ev"}
        statLabel={"attack"}
      />
      <CalculatorField
        defaultValue={ev.defense}
        fieldType={"ev"}
        statLabel={"defense"}
      />
      <CalculatorField
        defaultValue={ev.specialAttack}
        fieldType={"ev"}
        statLabel={"specialAttack"}
      />
      <CalculatorField
        defaultValue={ev.specialDefense}
        fieldType={"ev"}
        statLabel={"specialDefense"}
      />
      <CalculatorField
        defaultValue={ev.speed}
        fieldType={"ev"}
        statLabel={"speed"}
      />
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <br></br>iv<br></br>
      <CalculatorField
        defaultValue={iv.hp}
        fieldType={"iv"}
        statLabel={"hp"}
        maxValue={31}
      />
      <CalculatorField
        defaultValue={iv.attack}
        fieldType={"iv"}
        statLabel={"attack"}
        maxValue={31}
      />
      <CalculatorField
        defaultValue={iv.defense}
        fieldType={"iv"}
        statLabel={"defense"}
        maxValue={31}
      />
      <CalculatorField
        defaultValue={iv.specialAttack}
        fieldType={"iv"}
        statLabel={"specialAttack"}
        maxValue={31}
      />
      <CalculatorField
        defaultValue={iv.specialDefense}
        fieldType={"iv"}
        statLabel={"specialDefense"}
        maxValue={31}
      />
      <CalculatorField
        defaultValue={iv.speed}
        fieldType={"iv"}
        statLabel={"speed"}
        maxValue={31}
      />
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <br></br> current stat<br></br>
      <CalculatorField
        defaultValue={currentStat.hp}
        fieldType={"currentStat"}
        statLabel={"hp"}
        minValue={1}
        maxValue={714}
      />
      <CalculatorField
        defaultValue={currentStat.attack}
        fieldType={"currentStat"}
        statLabel={"attack"}
        minValue={4}
        maxValue={526}
      />
      <CalculatorField
        defaultValue={currentStat.defense}
        fieldType={"currentStat"}
        statLabel={"defense"}
        minValue={4}
        maxValue={614}
      />
      <CalculatorField
        defaultValue={currentStat.specialAttack}
        fieldType={"currentStat"}
        statLabel={"specialAttack"}
        minValue={4}
        maxValue={535}
      />
      <CalculatorField
        defaultValue={currentStat.specialDefense}
        fieldType={"currentStat"}
        statLabel={"specialDefense"}
        minValue={4}
        maxValue={614}
      />
      <CalculatorField
        defaultValue={currentStat.speed}
        fieldType={"currentStat"}
        statLabel={"speed"}
        maxValue={548}
      />
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <br></br>base stat<br></br>
      <CalculatorField
        defaultValue={baseStat.hp}
        fieldType={"baseStat"}
        statLabel={"hp"}
        maxValue={255}
      />
      <CalculatorField
        defaultValue={baseStat.attack}
        fieldType={"baseStat"}
        statLabel={"attack"}
        maxValue={190}
      />
      <CalculatorField
        defaultValue={baseStat.defense}
        fieldType={"baseStat"}
        statLabel={"defense"}
        maxValue={230}
      />
      <CalculatorField
        defaultValue={baseStat.specialAttack}
        fieldType={"baseStat"}
        statLabel={"specialAttack"}
        maxValue={194}
      />
      <CalculatorField
        defaultValue={baseStat.specialDefense}
        fieldType={"baseStat"}
        statLabel={"specialDefense"}
        maxValue={230}
      />
      <CalculatorField
        defaultValue={baseStat.speed}
        fieldType={"baseStat"}
        statLabel={"speed"}
        maxValue={200}
      />
    </>
  );
};

export default connect(mapStateToProps)(Calculator);
