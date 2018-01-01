import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
import Spinner from "react-spinkit";

import "../styles/Loader.css";

const LoaderSpinner = props => (
  <Spinner
    name="ball-pulse-sync"
    className="Spinner"
    color={props.color}
    fadeIn="none"
  />
);

const Loader = props => (
  <Flex className="App">
    <Box auto className="LoaderLeft">
      <LoaderSpinner color="#2d2d2d" />
    </Box>
    {props.full || (
      <Box auto className="LoaderRight">
        <LoaderSpinner color="white" />
      </Box>
    )}
  </Flex>
);

Loader.propTypes = {
  full: PropTypes.bool
};

export default Loader;
