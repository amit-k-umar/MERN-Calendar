import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Landing from "./Components/Landing";
import LandingMobile from "./Components/LandingMobile";

import "./App.css";
import UserContextProvider from "./Context/userContext";

class App extends Component {
  render() {
    return (
      <UserContextProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/landing" component={Display} />
            <Route  exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
      </UserContextProvider>
    );
  }
}
const Display = () => {
  return (
    <div>
      <Landing />
    </div>
  );
};

export default App;