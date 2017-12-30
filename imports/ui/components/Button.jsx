import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "../styles/Button.css";

const Button = props => (
  <button
    className={classnames({
      Button: true,
      Block: props.block,
      Negative: props.negative
    })}
    onClick={props.onClick}
  >
    {props.label}
  </button>
);

Button.propTypes = {
  block: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  negative: PropTypes.bool
};

export default Button;
