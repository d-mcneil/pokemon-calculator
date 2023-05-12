import React from "react";
import { connect } from "react-redux";
import { updateFilterfield } from "../redux/actions";
import { convertStringToLabel as label } from "../functions";

const mapDispatchToProps = (dispatch) => ({
  onUpdateField: (searchString, filterfield) =>
    dispatch(updateFilterfield(searchString, filterfield)),
});

const SearchBox = ({ onUpdateField, placeholder = "" }) => {
  return (
    <input
      type="search"
      placeholder={`Filter ${label(placeholder)}`}
      onChange={(event) => onUpdateField(event.target.value, placeholder)}
    ></input>
  );
};

export default connect(null, mapDispatchToProps)(SearchBox);
