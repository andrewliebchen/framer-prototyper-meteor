import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import PrototypeContainer from "../imports/ui/App.jsx";

import "./index.css";

// Meteor.startup(
//   () => (
//     <Router>
//       <Route exact path="/" component={App} />
//     </Router>
//   ),
//   document.getElementById("root")
// );

Meteor.startup(() => {
  render(<PrototypeContainer />, document.getElementById("root"));
});
