import React from "react";

const Button = ({
  onClick,
  text,
  buttonId = undefined,
  buttonClassNames = undefined,
}) => {
  return (
    <button onClick={onClick} className={buttonClassNames} id={buttonId}>
      {text}
    </button>
  );
};

export default Button;
