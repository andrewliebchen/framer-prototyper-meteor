import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "../imports/ui/pages/HomePage.jsx";
import PrototypePage from "../imports/ui/pages/PrototypePage.jsx";
import NewPrototypePage from "../imports/ui/pages/NewPrototypePage.jsx";
import NotFoundPage from "../imports/ui/pages/NotFoundPage.jsx";

import "./index.css";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/new" component={NewPrototypePage} />
      <Route
        path="/:id"
        render={({ match }) => <PrototypePage id={match.params.id} />}
      />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

Meteor.startup(() => {
  render(<Routes />, document.getElementById("root"));
});
