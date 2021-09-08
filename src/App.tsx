import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
import Rockets from "./components/Rockets/Rockets";
import Rocket from "./components/Rocket/Rocket";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Switch>
        <Route exact path="/rocket/:id" component={Rocket} />
        <Route exact path="/" component={Rockets} />
      </Switch>
    </Router>
  );
}

export default App;
