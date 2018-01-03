import React from "react";
import PropTypes from "prop-types";

import "../styles/Badge.css";

const Badge = props => <div className="Badge">{props.label}</div>;

Badge.propTypes = {
  label: PropTypes.string
};

export default Badge;
