import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import AceEditor from "react-ace";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";

import "../styles/Editor.css";

import "brace/mode/javascript";
import "brace/mode/coffee";
import "../lib/tomorrow_night_eighties";

class Editor extends Component {
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
      <div className="Editor">
        <AceEditor
          readOnly={!this.props.canEdit}
          mode={
            this.props.prototype.syntax === "coffeescript"
              ? "coffee"
              : "javascript"
          }
          theme="tomorrow_night_eighties"
          name="editorCode"
          value={this.props.code}
          width={`${this.state.width}px`}
          height="100vh"
          tabSize={2}
          softTabs={false}
          showInvisibles
          highlightActiveLine={false}
          highlightGutterLine={false}
          onChange={event =>
            Meteor.call("update", this.props.prototype._id, {
              code: event
            })}
          editorProps={{
            $blockScrolling: true
          }}
          style={{
            fontSize: "16px",
            lineHeight: "28px"
          }}
        />
      </div>
    );
  }
}

Editor.propTypes = {
  code: PropTypes.string,
  prototype: PropTypes.object,
  playing: PropTypes.bool,
  canEdit: PropTypes.bool
};

export default Editor;
