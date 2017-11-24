import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import AccountsUIWrapper from "../imports/ui/components/AccountsUIWrapper.jsx";
import PrototypeContainer from "../imports/ui/components/Prototype.jsx";

import "./index.css";

// Meteor.startup(
//   () => (
//     <Router>
//       <Route exact path="/" component={App} />
//     </Router>
//   ),
//   document.getElementById("root")
// );

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: Meteor.userId()
    };
  }

  render() {
    if (this.state.loggedIn) {
      return <PrototypeContainer />;
    } else {
      return (
        <div>
          <AccountsUIWrapper />
        </div>
      );
    }
  }
}

Meteor.startup(() => {
  render(<App />, document.getElementById("root"));
});
