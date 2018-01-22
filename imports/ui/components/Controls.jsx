import React from "react";
import { Flex } from "reflexbox";
import styled from "styled-components";

const Element = styled(Flex)`
  position: absolute;
  z-index: 1;
  right: 1em;
  top: 1em;
  bottom: 1em;
`;

const Controls = props => <Element column>{props.children}</Element>;

export default Controls;
