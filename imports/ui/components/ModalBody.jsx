import React from "react";
import PropTypes from "prop-types";

import Button from "./Button.jsx";

const ModalBody = props => (
  <div className="ModalBody">
    <div className="ModalHeader">
      <h2>{props.title}</h2>
      {props.handleAction && (
        <Button onClick={props.handleAction}>{props.actionLabel}</Button>
      )}
    </div>
    <div className="ModalContent">{props.children}</div>
  </div>
);

ModalBody.propTypes = {
  title: PropTypes.string,
  actionLabel: PropTypes.string,
  handleAction: PropTypes.func
};

export default ModalBody;
