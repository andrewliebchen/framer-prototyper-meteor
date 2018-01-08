import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import AceEditor from "react-ace";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";

import Editor from "./Editor.jsx";

import "../styles/FramerEditor.css";

class FramerEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null
    };
  }

  componentDidMount() {
    // Set the width of the Ace editor based on the width of the window
    // This will have to be recalculated when window is resized...
    const width = window.innerWidth * 0.5 - 32;
    this.setState({ width: width });
  }

  render() {
    return (
      <div className="FramerEditor">
        <Editor
          readOnly={!this.props.canEdit}
          mode={this.props.prototype.syntax}
          name="editorCode"
          value={this.props.code}
          width={`${this.state.width}px`}
          height="100vh"
          onChange={event =>
            Meteor.call("update", this.props.prototype._id, {
              code: event
            })}
        />
      </div>
    );
  }
}

FramerEditor.propTypes = {
  code: PropTypes.string,
  prototype: PropTypes.object,
  playing: PropTypes.bool,
  canEdit: PropTypes.bool
};

export default FramerEditor;
