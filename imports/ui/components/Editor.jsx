import React from "react";
import AceEditor from "react-ace";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
// import { Link } from "react-router-dom";

import Icon from "./Icon";

import "../styles/Editor.css";

import "brace/mode/jsx";
import "../lib/tomorrow_night_eighties";

const headerHeight = 80;

const Editor = props => (
  <div className="Editor">
    <Flex
      className="EditorHeader"
      align="center"
      style={{ height: headerHeight }}
    >
      <Box className="Control" data-tip="All prototypes">
        <Icon name="fileCabinet" />
      </Box>
      <Flex align="center" style={{ marginLeft: "auto" }}>
        <Box
          className="Control"
          onClick={props.showSettings}
          data-tip="Settings"
        >
          <Icon name="cog" />
        </Box>
        <Box
          className="Control"
          onClick={props.togglePlaying}
          data-tip={props.playing ? "Pause" : "Play"}
        >
          <Icon name={props.playing ? "pause" : "play"} />
        </Box>
      </Flex>
    </Flex>
    <div className="EditorCode">
      <AceEditor
        mode="jsx"
        theme="tomorrow_night_eighties"
        name="editorCode"
        value={props.code}
        onChange={event => props.handleChange(event)}
        width="50vw"
        height={`${window.innerHeight - headerHeight}px`}
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
  </div>
);

Editor.propTypes = {
  code: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  togglePlaying: PropTypes.func,
  playing: PropTypes.bool,
  showSettings: PropTypes.func
};

export default Editor;
