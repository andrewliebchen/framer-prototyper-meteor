import React from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";

import ListItem from "./ListItem.jsx";

import snippets from "../lib/snippets";

const Snippets = props => (
  <div>
    {snippets.map(snippet => (
      <ListItem
        key={snippet.name}
        primary={snippet.name}
        secondary={snippet.description}
        onClick={() =>
          Meteor.call("updateCode", {
            id: props.prototype._id,
            code: `${props.prototype.code}\n${snippet.code}`,
            updatedAt: Date.now()
          })}
      />
    ))}
  </div>
);

Snippets.propTypes = {
  prototype: PropTypes.object
};

export default Snippets;
