import React from "react";
import PropType from "prop-types";
import { Box } from "reflexbox";
import { Link } from "react-router-dom";

import Icon from "./Icon.jsx";

import "../styles/Control.css";

const RenderLink = props => (
  <Link to={props.link}>
    <Icon name={props.icon} />
  </Link>
);

const Control = props => (
  <Box
    className={`Control ${props.className && props.className}`}
    data-tip={props.tip}
    align="center"
    justify="center"
  >
    {props.link ? (
      <RenderLink {...props} />
    ) : (
      <div onClick={props.handleClick}>
        <Icon name={props.icon} />
      </div>
    )}
  </Box>
);

Control.propTypes = {
  className: PropType.string,
  tip: PropType.string,
  handleClick: PropType.func,
  icon: PropType.string,
  link: PropType.string
};

export default Control;
