import React from "react";
import { connect } from "react-redux";
import { maxIv, minIV } from "../redux/actions";
import Button from "../components/Button.component";
import { STAT_NAME } from "../constantsNonRedux";

const mapDispatchToProps = (dispatch) => ({
  handleMaxIv: () => dispatch(maxIv()),
  handleMinIv: (statName) => dispatch(minIV(statName)),
});

const IvButtons = ({ handleMaxIv, handleMinIv }) => {
  return (
    <>
      <p className="button-wrapper-label">Max IVs:</p>
      <div className="button-wrapper">
        <Button
          buttonClassNames={"max-button"}
          text="+All"
          onClick={handleMaxIv}
        />
        <Button
          buttonClassNames={"max-button"}
          text="-Spe"
          onClick={() => handleMinIv(STAT_NAME.speed)}
        />
        <Button
          buttonClassNames={"max-button"}
          text="-Atk"
          onClick={() => handleMinIv(STAT_NAME.attack)}
        />
      </div>
    </>
  );
};

export default connect(null, mapDispatchToProps)(IvButtons);
