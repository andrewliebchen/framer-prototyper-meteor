import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import LoginPage from "../imports/ui/pages/Login.jsx";
import PrototypePage from "../imports/ui/pages/Prototype.jsx";
import NewPrototypePage from "../imports/ui/pages/NewPrototype.jsx";
import FullPreview from "../imports/ui/pages/FullPreview.jsx";
// import NotFound from "../imports/ui/pages/NotFound.jsx";

import "./index.css";

// Pages
// Login: No current user
// Prototype: If there is a current user, visiting a prototype with /:id will show edit mode
// Preview: If not a current user, visiting /:id will show preview. Current user can visit /:id/preview
// New: A pass through page that creates a new prototype /new

const RenderRoutes = () => (
  <Router>
    <div>
      {Meteor.userId() ? (
        <Switch>
          <Route path="/new" component={NewPrototypePage} />
          <Route path="/login" compoent={LoginPage} />
          <Route
            path="/:id/preview"
            render={({ match }) => <FullPreview id={match.params.id} />}
          />
          <Route
            path="/:id"
            render={({ match }) => <PrototypePage id={match.params.id} />}
          />
        </Switch>
      ) : (
        <LoginPage />
      )}
    </div>
  </Router>
);

Meteor.startup(() => {
  render(<RenderRoutes />, document.getElementById("root"));
});
