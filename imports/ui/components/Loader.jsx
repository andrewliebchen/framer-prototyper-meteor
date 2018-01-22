import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
import Spinner from "react-spinkit";
import styled from "styled-components";

const Left = styled(Box)`
  background-color: white;
  position: relative;
`;

const Right = styled(Box)`
  background-color: var(--color-gray-2);
  position: relative;
`;

const CenteredSpinner = styled(Spinner)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

const LoaderSpinner = props => (
  <CenteredSpinner name="ball-pulse-sync" color={props.color} fadeIn="none" />
);

const Loader = props => (
  <Flex className="App">
    <Left auto className="LoaderLeft">
      <LoaderSpinner color="#2d2d2d" />
    </Left>
    {props.full || (
      <Right auto className="LoaderRight">
        <LoaderSpinner color="white" />
      </Right>
    )}
  </Flex>
);

Loader.propTypes = {
  full: PropTypes.bool
};

export default Loader;
