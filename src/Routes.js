import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Snow from "react-snow-effect";

import Home from "./Home";
import PersonList from "./PersonList";

const history = createBrowserHistory();

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Snow />
        <Router history={history}>
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/list"} component={PersonList} />
          </Switch>
        </Router>
      </div>
    );
  }
}
