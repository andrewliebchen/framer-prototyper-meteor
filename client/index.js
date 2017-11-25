import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AccountsUIWrapper from "../imports/ui/components/AccountsUIWrapper.jsx";
import PrototypeContainer from "../imports/ui/components/Prototype.jsx";

import "./index.css";

const App = ({ match }) => {
  if (Meteor.userId()) {
    return <PrototypeContainer id={match.params.id} />;
  } else {
    return (
      <div className="Login">
        <AccountsUIWrapper />
      </div>
    );
  }
};

const RenderRoutes = () => (
  <Router>
    <Route exact path="/:id" component={App} />
  </Router>
);

Meteor.startup(() => {
  render(<RenderRoutes />, document.getElementById("root"));
});
