import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";

import Icon from "./Icon.jsx";

import "../styles/Controls.css";

const Controls = props => (
  <Flex className="Controls" column>
    <Box
      className="Control"
      data-tip="All prototypes"
      align="center"
      justify="center"
    >
      <Icon name="fileCabinet" />
    </Box>
    <Box
      className="Control"
      onClick={props.showSettings}
      data-tip="Settings"
      align="center"
      justify="center"
    >
      <Icon name="cog" />
    </Box>
    <Box
      className="Control"
      onClick={props.togglePlaying}
      data-tip={props.playing ? "Pause" : "Play"}
      align="center"
      justify="center"
    >
      <Icon name={props.playing ? "pause" : "play"} />
    </Box>
  </Flex>
);

Controls.propTypes = {
  togglePlaying: PropTypes.func,
  playing: PropTypes.bool,
  showSettings: PropTypes.func
};

export default Controls;
