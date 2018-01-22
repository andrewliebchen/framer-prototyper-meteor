import React from "react";
import PropType from "prop-types";
import styled from "styled-components";

const Control = styled.div`
  position: relative;
  margin-bottom: 0.5em;
  align-items: center;
  background-color: ${props => (props.dark ? "var(--color-gray-4)" : "black")};
  border-radius: var(--control-size);
  color: ${props => (props.dark ? "var(--color-gray-3)" : "white")};
  cursor: pointer;
  display: flex;
  height: 24px;
  height: var(--control-size);
  justify-content: center;
  padding: 0 1em;
  text-align: center;
  transition: var(--transition);
  width: var(--control-size);
  z-index: 1;

  &:hover {
    color: ${props => props.dark && "var(--color-accent)"};
    box-shadow: 0 0 0 2px var(--color-accent);
  }
`;

Control.propTypes = {
  dark: PropType.bool
};

export default Control;
