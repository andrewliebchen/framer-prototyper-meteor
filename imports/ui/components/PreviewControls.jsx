import React from "react";
import PropTypes from "prop-types";
import { Flex } from "reflexbox";
import { Link } from "react-router-dom";
import { ExternalLink, Edit3 } from "react-feather";

import Control from "./Control.jsx";

import "../styles/Controls.css";

const PreviewControls = props => (
  <Flex className="Controls" column>
    {Meteor.userId() && (
      <Link
        className="Control PreviewControl"
        to={
          props.full
            ? `/${props.prototype._id}`
            : `/${props.prototype._id}/preview`
        }
        data-tip={props.full ? "Edit" : "Preview"}
      >
        {props.full ? <Edit3 /> : <ExternalLink />}
      </Link>
    )}
  </Flex>
);

PreviewControls.propType = {
  full: PropTypes.bool,
  prototype: PropTypes.object
};

export default PreviewControls;
