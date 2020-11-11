import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Landing from "./Components/Landing";
import LandingMobile from "./Components/LandingMobile";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Display}></Route>
            <Route path="/home" exact component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}
const Display = () => {
  return (
    <div>
      <Landing />
      <LandingMobile />
    </div>
  );
};

export default App;
