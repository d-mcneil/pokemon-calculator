import React from "react";
import "./Button.styles.scss";

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
      <br></br>
      <br></br>
    </>
  );
};

export default Button;
