import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
import { Folder, Settings, Play, Pause, Sun, HelpCircle } from "react-feather";
import { Link } from "react-router-dom";

import Control from "./Control.jsx";

import "../styles/Controls.css";

const EditControls = props => (
  <Flex className="Controls" column>
    <Control
      tip="All prototypes"
      icon={<Folder />}
      handleClick={props.showAll}
    />
    <Control
      tip="Settings"
      icon={<Settings />}
      handleClick={props.showSettings}
    />
    <Control
      tip={props.playing ? "Pause" : "Play"}
      icon={props.playing ? <Pause /> : <Play />}
      handleClick={props.togglePlaying}
    />
    <Control tip={"Help"} icon={<HelpCircle />} handleClick={props.showHelp} />
    <Link className="Control PrimaryControl" to="/new" data-tip="New Prototype">
      <Sun />
    </Link>
  </Flex>
);

EditControls.propTypes = {
  togglePlaying: PropTypes.func,
  playing: PropTypes.bool,
  showSettings: PropTypes.func,
  showHelp: PropTypes.func,
  showAll: PropTypes.func
};

export default EditControls;
