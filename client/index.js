import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginPage from "../imports/ui/pages/Login.jsx";
import PrototypePage from "../imports/ui/pages/Prototype.jsx";
import NewPrototypePage from "../imports/ui/pages/NewPrototype.jsx";
import FullPreview from "../imports/ui/pages/FullPreview.jsx";
import NotFound from "../imports/ui/pages/NotFound.jsx";

import "./index.css";

// Could use the router instead of switch to overlay stuff here...
// For instance overlay a login, if it has preview, don't show the code, etc.

// Allow a prototype without a user account...

const RenderRoutes = () => (
  <Router>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route
        path="/:id/preview"
        render={({ match }) => <FullPreview id={match.params.id} />}
      />
      <Route
        path="/:id"
        render={({ match }) => <PrototypePage id={match.params.id} />}
      />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

Meteor.startup(() => {
  render(<RenderRoutes />, document.getElementById("root"));
});
