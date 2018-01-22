import React from "react";
import PropTypes from "prop-types";
import { Box } from "reflexbox";
import styled from "styled-components";
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

import Controls from "./Controls.jsx";
import Control from "./Control.jsx";
import Badge from "./Badge.jsx";

const BadgeWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 1;
  transform: translate3d(-50%, -50%, 0);
`;

const EditControls = props => (
  <Controls>
    {(props.isDesktop || props.canEdit) && (
      <Control data-tip="All prototypes" onClick={props.showAll}>
        <Folder />
      </Control>
    )}
    <Control data-tip="Settings" onClick={props.showSettings}>
      <Settings />
      <BadgeWrapper>
        <Badge label={props.syntax === "javascript" ? "JS" : "CS"} />
      </BadgeWrapper>
    </Control>
    <Control data-tip="Utilities" onClick={props.showUtilities}>
      <Zap />
    </Control>
    <Control
      data-tip={props.playing ? "Pause" : "Play"}
      onClick={props.togglePlaying}
    >
      {props.playing ? <Pause /> : <Play />}
    </Control>
    <Control
      data-tip="New Prototype"
      onClick={() => props.history.push("/new")}
    >
      <Sun />
    </Control>
    <Box style={{ marginTop: "auto" }}>
      <Control
        data-tip={`Sign ${props.isLoggedIn ? "out" : "in"}`}
        onClick={() => {
          if (props.isLoggedIn) {
            props.handleLogOut();
          } else {
            props.handleLogIn();
          }
        }}
      >
        {props.isLoggedIn ? <LogOut /> : <LogIn />}
      </Control>
    </Box>
  </Controls>
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
