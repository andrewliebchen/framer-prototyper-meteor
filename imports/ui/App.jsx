import React from "react";
import PropTypes from "prop-types";
import { createContainer } from "meteor/react-meteor-data";

import { Prototypes } from "../api/prototypes.js";

const App = props => (
  <div className="container">
    <h1>Hello World</h1>
  </div>
);

App.propTypes = {
  prototypes: PropTypes.array.isRequired
};

export default createContainer(() => {
  return {
    prototypes: Prototypes.find({}).fetch()
  };
}, App);
