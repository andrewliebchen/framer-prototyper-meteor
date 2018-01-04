import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
import { Link } from "react-router-dom";
import {
  Folder,
  Settings,
  Play,
  Pause,
  Sun,
  Zap,
  LogIn,
  LogOut
} from "react-feather";

import Control from "./Control.jsx";
import Badge from "./Badge.jsx";

import "../styles/Controls.css";

const EditControls = props => (
  <Flex className="Controls" column>
    {(props.isDesktop || props.canEdit) && (
        <Control
          tip="All prototypes"
          icon={<Folder />}
          handleClick={props.showAll}
        />
      )}
    <Control
      tip="Settings"
      icon={<Settings />}
      handleClick={props.showSettings}
      badge={<Badge label={props.syntax === "javascript" ? "JS" : "CS"} />}
    />
    <Control tip="Utilities" icon={<Zap />} handleClick={props.showUtilities} />
    <Control
      tip={props.playing ? "Pause" : "Play"}
      icon={props.playing ? <Pause /> : <Play />}
      handleClick={props.togglePlaying}
    />
    <div className="ControlWrapper">
      <Link
        className="Control PrimaryControl"
        to="/new"
        data-tip="New Prototype"
      >
        <Sun />
      </Link>
    </div>
    {props.isDesktop || (
      <Box style={{ marginTop: "auto" }}>
        <Control
          tip={`Sign ${props.isLoggedIn ? "out" : "in"}`}
          icon={props.isLoggedIn ? <LogOut /> : <LogIn />}
          handleClick={() => {
            if (props.isLoggedIn) {
              props.handleLogOut();
            } else {
              props.handleLogIn();
            }
          }}
        />
      </Box>
    )}
  </Flex>
);

EditControls.propTypes = {
  canEdit: PropTypes.bool,
  handleLogIn: PropTypes.func,
  handleLogOut: PropTypes.func,
  isDesktop: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  playing: PropTypes.bool,
  showAll: PropTypes.func,
  showSettings: PropTypes.func,
  showUtilities: PropTypes.func,
  syntax: PropTypes.oneOf(["coffeescript", "javascript"]),
  togglePlaying: PropTypes.func
};

export default EditControls;
