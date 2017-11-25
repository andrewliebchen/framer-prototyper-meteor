import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

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

class NewPrototype extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newId: null
    };
  }

  render() {
    // Create the new prototype
    Meteor.call(
      "newPrototype",
      {
        createdAt: Date.now(),
        owner: Meteor.userId()
      },
      (err, id) => {
        if (id) {
          return this.setState({ newId: id });
        }
      }
    );

    // Render the proper thingy
    if (this.state.newId) {
      return <Redirect to={`/${this.state.newId}`} />;
    } else {
      return null;
    }
  }
}

const RenderRoutes = () => (
  <Router>
    <div>
      <Route exact path="/:id" component={App} />
      <Route path="/new" component={NewPrototype} />
    </div>
  </Router>
);

Meteor.startup(() => {
  render(<RenderRoutes />, document.getElementById("root"));
});
