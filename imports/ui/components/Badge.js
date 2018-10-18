import PropTypes from 'prop-types';
import React from 'react';

import '../styles/Badge.css';

const Badge = props => <div className="Badge">{props.label}</div>;

Badge.propTypes = {
  label: PropTypes.string,
};

export default Badge;
