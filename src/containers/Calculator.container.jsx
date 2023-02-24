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
      evs<br></br>
      <CalculatorField statLabel={"hp"} />
      <CalculatorField statLabel={"attack"} />
      <CalculatorField statLabel={"defense"} />
      <CalculatorField statLabel={"special attack"} />
      <CalculatorField statLabel={"special defense"} />
      <CalculatorField statLabel={"speed"} />
      <br></br>iv<br></br>
      <CalculatorField statLabel={"hp"} maxValue={31} />
      <CalculatorField statLabel={"attack"} maxValue={31} />
      <CalculatorField statLabel={"defense"} maxValue={31} />
      <CalculatorField statLabel={"special attack"} maxValue={31} />
      <CalculatorField statLabel={"special defense"} maxValue={31} />
      <CalculatorField statLabel={"speed"} maxValue={31} />
      <br></br> current stat<br></br>
      <CalculatorField statLabel={"hp"} minValue={1} maxValue={714} />
      <CalculatorField statLabel={"attack"} minValue={4} maxValue={526} />
      <CalculatorField statLabel={"defense"} minValue={4} maxValue={614} />
      <CalculatorField
        statLabel={"special attack"}
        minValue={4}
        maxValue={535}
      />
      <CalculatorField
        statLabel={"special defense"}
        minValue={4}
        maxValue={614}
      />
      <CalculatorField statLabel={"speed"} maxValue={548} />
      <br></br>base stat<br></br>
      <CalculatorField statLabel={"hp"} maxValue={255} />
      <CalculatorField statLabel={"attack"} maxValue={190} />
      <CalculatorField statLabel={"defense"} maxValue={230} />
      <CalculatorField statLabel={"special attack"} maxValue={194} />
      <CalculatorField statLabel={"special defense"} maxValue={230} />
      <CalculatorField statLabel={"speed"} maxValue={200} />
    </>
  );
};

export default connect(mapStateToProps)(Calculator);
