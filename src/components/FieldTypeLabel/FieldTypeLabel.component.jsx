import React from "react";
import { convertStringToLabel as label } from "../../functions";

const FieldTypeLabel = ({ fieldType }) => {
  return <h3>{label(fieldType)}</h3>;
};

export default FieldTypeLabel;
