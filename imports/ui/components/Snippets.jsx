import React, { Component } from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import SearchInput, { createFilter } from "react-search-input";

import ListItem from "./ListItem.jsx";

import snippets from "../lib/snippets";

class Snippets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  render() {
    const filteredSnippets = snippets.filter(
      createFilter(this.state.searchTerm, ["name"])
    );

    return (
      <div>
        <SearchInput
          className="Search"
          onChange={term => this.setState({ searchTerm: term })}
        />
        {filteredSnippets.map((snippet, i) => (
          <ListItem
            key={i}
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
  }
}

Snippets.propTypes = {
  prototype: PropTypes.object
};

export default Snippets;
