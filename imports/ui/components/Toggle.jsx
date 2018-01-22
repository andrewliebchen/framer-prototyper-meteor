import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
import styled from "styled-components";

import "../styles/Toggle.css";

const Container = styled.div`
  margin-bottom: 1em;
`;

const Toggle = styled.div`
  transition: var(--transition);
  width: 4em;
  height: 3px;
  border-radius: 3px;
  background-color: ${props =>
    props.isOn ? "var(--color-gray-1)" : "var(--color-gray-3)"};
  margin-top: 1em;
  position: relative;
  cursor: pointer;
`;

const Handle = styled.div`
  transition: var(--transition);
  width: 2em;
  height: 2em;
  border-radius: 1em;
  border: 3px solid;
  border-color: ${props =>
    props.isOn ? "var(--color-gray-1)" : "var(--color-gray-3)"}
  background-color: white;
  position: absolute;
  top: 50%;
  transform: ${props =>
    props.isOne
      ? "translate3d(1.75em, -50%, 0)"
      : "translate3d(0.25em, -50%, 0)"};
`;

const Label = styled.div`
  line-height: 2em;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: var(--letter-spacing);
  text-transform: uppercase;
`;

const Hint = styled.small`
  display: block;
  padding-top: 1em;
`;

const Toggle = props => (
  <Container onClick={props.onToggle}>
    <Flex>
      <Box style={{ flex: "0 0 6em" }}>
        <Toggle {...props}>
          <Handle {...props} />
        </Toggle>
      </Box>
      <Box>
        <Label>{props.label}</Label>
        <Hint>{props.hint}</Hint>
      </Box>
    </Flex>
  </Container>
);

Toggle.propTypes = {
  on: PropTypes.bool,
  label: PropTypes.string,
  hint: PropTypes.string,
  onToggle: PropTypes.func
};

export default Toggle;
