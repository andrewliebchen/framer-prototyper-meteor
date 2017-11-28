import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";

import Control from "./Control.jsx";

import "../styles/Controls.css";

const PreviewControls = props => (
  <Flex className="Controls" column>
    <Control
      tip={props.full ? "Edit" : "Preview"}
      icon={props.full ? "edit" : "eye"}
      className="PreviewControl"
      link={
        props.full
          ? `/${props.prototype._id}`
          : `/${props.prototype._id}/preview`
      }
    />
  </Flex>
);

PreviewControls.propType = {
  full: PropTypes.bool,
  prototype: PropTypes.object
};

export default PreviewControls;
