import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  appearance: none;
  background-color: transparent;
  border-color: ${props =>
    props.negative ? "var(--color-red)" : "var(--color-accent)"};
  border-radius: 3em;
  border: 1px solid;
  color: ${props =>
    props.negative ? "var(--color-red)" : "var(--color-accent)"};
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  display: ${props => (props.block ? "block" : "inline-block")};
  font-size: 1em;
  font-weight: 500;
  letter-spacing: var(--letter-spacing);
  line-height: 3em;
  padding: 0 1em;
  text-align: center;
  text-transform: uppercase;
  user-select: none;
  width: ${props => (props.block ? "100%" : "auto")};

  &:hover {
    background-color: ${props =>
      props.negative ? "var(--color-red)" : "var(--color-accent)"};
    color: white;
  }

  &:focus {
    outline: none;
    box-shadow: var(--outline-focus);
  }

  &:disabled {
    color: var(--color-accent);
    background-color: transparent;
  }
`;

Button.propTypes = {
  block: PropTypes.bool,
  negative: PropTypes.bool
};

export default Button;
