import React from "react";
import { connect } from "react-redux";
import Button from "../components/Button/Button.component";
import {
  STAT_NAME,
  MAX_VALUE,
  FIELD_TYPE,
  STAT_NAME_SHORT,
} from "../constantsNonRedux";
import { convertStringToLabel } from "../functions";
import { updateCalculatorField } from "../redux/actions";

const mapDispatchToProps = (dispatch) => ({
  maxEv: (statName) =>
    dispatch(updateCalculatorField(MAX_VALUE.ev, FIELD_TYPE.ev, statName)),
});

const EvButtons = ({ maxEv }) => {
  const handleMaxEv = (statName) => {
    document.getElementById(
      `calculator-field-${FIELD_TYPE.ev}-${statName}`
    ).value = MAX_VALUE.ev;
    maxEv(statName);
  };

  return (
    <>
      <p className="button-wrapper-label">Max EVs:</p>
      <div className="button-wrapper">
        {Object.keys(STAT_NAME).map((statName) => (
          <Button
            buttonClassNames={"max-button"}
            key={`max-${statName}-evs`}
            text={convertStringToLabel(STAT_NAME_SHORT[statName]).replace(
              " ",
              ""
            )}
            onClick={() => handleMaxEv(statName)}
          />
        ))}
      </div>
    </>
  );
};

export default connect(null, mapDispatchToProps)(EvButtons);
