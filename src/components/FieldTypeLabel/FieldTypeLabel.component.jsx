import React from "react";
import { convertStringToLabel as label } from "../../functions";
import "./FieldTypeLabel.styles.scss";

const FieldTypeLabel = ({ fieldType }) => {
  return (
    <>
      <br></br>
      <br></br>
      <span>{label(fieldType)}</span>
      <br></br>
    </>
  );
};

export default FieldTypeLabel;
