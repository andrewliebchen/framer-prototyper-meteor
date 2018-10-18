import {Meteor} from 'meteor/meteor';
import {settings, device, components, layers} from '../../lib/snippets';
import ListItem from './ListItem.jsx';
import PropTypes from 'prop-types';
import React from 'react';

const snippetSections = [settings, device, components, layers];

const Snippets = props => (
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
                Meteor.call('updatePrototype', props.prototype._id, {
                  code: `${props.prototype.code}\n\n${
                    snippet.code[props.prototype.syntax]
                  }`,
                  updatedAt: Date.now(),
                })
              }
            />
          ))}
        </div>
      );
    })}
  </div>
);

Snippets.propTypes = {
  prototype: PropTypes.object,
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
        id: props.prototype._id,
        code: `${props.props.prototype.code}\n${snippet.code}`,
        updatedAt: Date.now()
      })}
  />
))} */
