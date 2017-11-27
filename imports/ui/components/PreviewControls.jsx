import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";

import Control from "./Control.jsx";

import "../styles/Controls.css";

const PreviewControls = props => (
  <Flex className="Controls" column>
    <Control
      tip="Preview"
      icon="eye"
      className="PreviewControl"
      link={`preview`}
    />
  </Flex>
);

export default PreviewControls;
