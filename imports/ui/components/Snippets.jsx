import React from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";

import snippets from "../lib/snippets";

const Snippets = props => (
  <div>
    {snippets.map(snippet => (
      <button
        key={snippet.name}
        onClick={() =>
          Meteor.call("updateCode", {
            id: props.prototype._id,
            code: `${props.prototype.code}\n${snippet.code}`,
            updatedAt: Date.now()
          })}
      >
        {snippet.name}
      </button>
    ))}
  </div>
);

Snippets.propTypes = {
  prototype: PropTypes.object
};

export default Snippets;
