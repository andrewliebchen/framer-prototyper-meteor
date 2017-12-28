import React from "react";
import { Meteor } from "meteor/meteor";
import AceEditor from "react-ace";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";

import "../styles/Editor.css";

import "brace/mode/javascript";
import "brace/mode/coffee";
import "../lib/tomorrow_night_eighties";

const Editor = props => (
  <div className="Editor">
    <AceEditor
      readOnly={!props.canEdit}
      mode={props.prototype.syntax === "coffeescript" ? "coffee" : "javascript"}
      theme="tomorrow_night_eighties"
      name="editorCode"
      value={props.code}
      width="50vw"
      height="100vh"
      tabSize={2}
      softTabs={false}
      showInvisibles
      highlightActiveLine={false}
      highlightGutterLine={false}
      onChange={event =>
        Meteor.call("update", props.prototype._id, {
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

Editor.propTypes = {
  code: PropTypes.string,
  prototype: PropTypes.object,
  playing: PropTypes.bool,
  canEdit: PropTypes.bool
};

export default Editor;
