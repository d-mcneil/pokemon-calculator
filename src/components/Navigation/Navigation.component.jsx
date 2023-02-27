import React from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../Button/Button.component";

import "./Navigation.styles.scss";

const Navigation = () => {
  return (
    <div>
      <Link to={"/current-stat"}>
        <Button text={"Calculate Stats"} />
      </Link>
      <Link to={"/iv"}>
        <Button text={"Calculate IVs"} />
      </Link>
      <Link to={"/ev"}>
        <Button text={"Calculate EVs"} />
      </Link>
      <Outlet />
    </div>
  );
};

export default Navigation;
