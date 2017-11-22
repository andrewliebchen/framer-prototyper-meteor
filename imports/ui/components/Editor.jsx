import React from "react";
import AceEditor from "react-ace";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
// import { Link } from "react-router-dom";

import Icon from "./Icon";

import "../styles/Editor.css";

import "brace/mode/jsx";
import "../lib/tomorrow_night_eighties";

const Editor = props => (
  <div className="Editor">
    <AceEditor
      mode="jsx"
      theme="tomorrow_night_eighties"
      name="editorCode"
      value={props.code}
      onChange={event => props.handleChange(event)}
      width="50vw"
      height="100vh"
      tabSize={2}
      softTabs={false}
      showInvisibles
      highlightActiveLine={false}
      highlightGutterLine={false}
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
  handleChange: PropTypes.func,
  playing: PropTypes.bool
};

export default Editor;
