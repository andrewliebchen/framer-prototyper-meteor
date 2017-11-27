import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";

import Icon from "./Icon.jsx";
import Control from "./Control.jsx";

import "../styles/Controls.css";

const EditControls = props => (
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
    <Control tip="New Prototype" icon="baby" link="/new" />
  </Flex>
);

EditControls.propTypes = {
  togglePlaying: PropTypes.func,
  playing: PropTypes.bool,
  showSettings: PropTypes.func,
  showAll: PropTypes.func
};

export default EditControls;
