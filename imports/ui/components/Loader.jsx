import React from "react";
import { Flex, Box } from "reflexbox";
import Spinner from "react-spinkit";

import "../styles/Loader.css";

const LoaderSpinner = props => (
  <Spinner
    name="ball-pulse-sync"
    className="Spinner"
    color={props.color}
    fadeIn={0}
  />
);

const Loader = () => (
  <Flex className="App">
    <Box auto className="LoaderLeft">
      <LoaderSpinner color="#2d2d2d" />
    </Box>
    <Box auto className="LoaderRight">
      <LoaderSpinner color="white" />
    </Box>
  </Flex>
);

export default Loader;
