import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import '../styles/Button.css';

const Button = props => (
  <button
    className={classnames({
      Button: true,
      Block: props.block,
      Negative: props.negative,
      Disabled: props.disabled,
    })}
    onClick={props.onClick}
    disabled={props.disabled}>
    {props.label}
  </button>
);

Button.propTypes = {
  block: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  negative: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
