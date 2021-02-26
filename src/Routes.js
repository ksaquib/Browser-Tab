import React from "react";
import About from "./Pages/About";
import Features from "./Pages/Features";
import Home from "./Pages/Home";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/features">
        <Features />
      </Route>
      <Route path="/" exact={true}>
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
