import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <Header />

          <div className="viewport">
            <Routes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
