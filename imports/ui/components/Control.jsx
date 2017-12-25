import React from "react";
import PropType from "prop-types";

import "../styles/Control.css";

const Control = props => (
  <div className="ControlWrapper">
    <div
      className={`Control ${props.className ? props.className : ""}`}
      data-tip={props.tip}
      onClick={props.handleClick && props.handleClick}
    >
      <div className="Icon">{props.icon}</div>
    </div>
    {props.badge}
  </div>
);

Control.propTypes = {
  className: PropType.string,
  tip: PropType.string,
  handleClick: PropType.func,
  icon: PropType.node,
  badge: PropType.node
};

export default Control;
