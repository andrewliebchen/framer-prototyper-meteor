import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";

import Icon from "./Icon.jsx";

import "../styles/Controls.css";

const Control = props => (
  <Box
    className="Control"
    data-tip={props.tip}
    onClick={props.handleClick}
    align="center"
    justify="center"
  >
    <Icon name={props.icon} />
  </Box>
);

const Controls = props => (
  <Flex className="Controls" column>
    <Control
      tip="All prototypes"
      icon="fileCabinet"
      handleClick={props.showAll}
    />
    <Control tip="Settings" icon="cog" handleClick={props.showSettings} />
    <Control
      tip={props.playing ? "Pause" : "Play"}
      icon={props.playing ? "pause" : "play"}
      handleClick={props.togglePlaying}
    />
    <Control
      tip="New Prototype"
      icon="baby"
      handleClick={() =>
        Meteor.call("newPrototype", {
          createdAt: Date.now(),
          owner: Meteor.userId()
        })}
    />
  </Flex>
);

Controls.propTypes = {
  togglePlaying: PropTypes.func,
  playing: PropTypes.bool,
  showSettings: PropTypes.func,
  showAll: PropTypes.func
};

export default Controls;
