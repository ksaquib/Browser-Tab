import React from "react";
import { NavLink } from "react-router-dom";
import Tab from "./Tab";
const Header = () => {
  return (
    <div className="tabs">
      <Tab>
        <NavLink exact={true} activeClassName="is-active" to="/">
          Home
        </NavLink>
      </Tab>
      <Tab>
        <NavLink activeClassName="is-active" to="/about">
          About
        </NavLink>
      </Tab>
      <Tab>
        <NavLink activeClassName="is-active" to="/features">
          Features
        </NavLink>
      </Tab>
    </div>
  );
};

export default Header;
