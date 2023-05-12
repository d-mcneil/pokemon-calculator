import React from "react";
import { connect } from "react-redux";
import { maxIv } from "../redux/actions";
import Button from "../components/Button/Button.component";

const mapDispatchToProps = (dispatch) => ({
  handleMaxIv: ({ attack = true, speed = true }) =>
    dispatch(maxIv({ attack, speed })),
});

const IvButtons = ({ handleMaxIv }) => {
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
          onClick={() => handleMaxIv({ speed: false })}
        />
        <Button
          buttonClassNames={"max-button"}
          text="-Atk"
          onClick={() => handleMaxIv({ attack: false })}
        />
      </div>
    </>
  );
};

export default connect(null, mapDispatchToProps)(IvButtons);
