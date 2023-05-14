import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FIELD_TYPE } from "../constantsNonRedux";

const Navigation = () => {
  return (
    <div className="main-container">
      <nav className="sidebar-container">
        <ul className="sidebar">
          <li className="sidebar-item sidebar-spacer"></li>

          <li className="sidebar-item" id={`${FIELD_TYPE.currentStat}-sidebar`}>
            <Link to={"/"}>Calculate Stats</Link>
          </li>

          <li className="sidebar-item" id={`${FIELD_TYPE.iv}-sidebar`}>
            <Link to={"/iv"}>Calculate IVs </Link>
          </li>

          <li className="sidebar-item" id={`${FIELD_TYPE.ev}-sidebar`}>
            <Link to={"/ev"}> Calculate EVs</Link>{" "}
          </li>

          <li className="sidebar-item sidebar-spacer"></li>
        </ul>
      </nav>
      <Outlet /> {/* Calculator container */}
    </div>
  );
};

export default Navigation;
