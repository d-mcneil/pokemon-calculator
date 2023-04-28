import React from "react";
import { convertStringToLabel as label } from "../../functions";
import "./FieldTypeLabel.styles.scss";

const FieldTypeLabel = ({ fieldType }) => {
  return <h3>{label(fieldType)}</h3>;
};

export default FieldTypeLabel;
