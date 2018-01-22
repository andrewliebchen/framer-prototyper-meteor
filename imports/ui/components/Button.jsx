import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styled from "styled-components";

import "../styles/Button.css";

const Element = styled.button`
  appearance: none;
  background-color: transparent;
  border: 1px solid;
  border-color: ${props =>
    props.negative ? "var(--color-red)" : "var(--color-accent)"};
  color: ${props =>
    props.negative ? "var(--color-red)" : "var(--color-accent)"};
  display: inline-block;
  line-height: 3em;
  font-weight: 500;
  text-align: center;
  border-radius: 3em;
  padding: 0 1em;
  font-size: 1em;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing);
  user-select: none;

  &:hover {
    background-color: var(--color-accent);
    color: white;
  }

  &:focus {
    outline: none;
    box-shadow: var(--outline-focus);
  }
`;

const Button = props => (
  <Element
    className={classnames({
      Button: true,
      Block: props.block,
      Negative: props.negative,
      Disabled: props.disabled
    })}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.label}
  </Element>
);

Button.propTypes = {
  block: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  negative: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Button;
