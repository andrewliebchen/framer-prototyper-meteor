import React, { Component } from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import SearchInput, { createFilter } from "react-search-input";

import ListItem from "./ListItem.jsx";

import { settings, device, components, layers } from "../lib/snippets";

const snippetSections = [settings, device, components, layers];

class Snippets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  render() {
    const { prototype } = this.props;

    return (
      <div>
        {snippetSections.map(section => {
          return (
            <div key={section.title} className="ModalSection">
              <h3>{section.title}</h3>
              {section.snippets.map((snippet, i) => (
                <ListItem
                  key={i}
                  secondary={snippet.name}
                  onClick={() =>
                    Meteor.call("update", prototype._id, {
                      code: `${prototype.code}\n\n${snippet.code[
                        prototype.syntax
                      ]}`,
                      updatedAt: Date.now()
                    })}
                />
              ))}
            </div>
          );
        })}
      </div>
    );
  }
}

Snippets.propTypes = {
  prototype: PropTypes.object
};

export default Snippets;

// FIXME: Make this work...
// const filteredSnippets = snippets.filter(
//   createFilter(this.state.searchTerm, ["name"])
// );
/* <SearchInput
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
        id: prototype._id,
        code: `${props.prototype.code}\n${snippet.code}`,
        updatedAt: Date.now()
      })}
  />
))} */
