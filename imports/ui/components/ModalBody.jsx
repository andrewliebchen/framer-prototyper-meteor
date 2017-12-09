import React from "react";
import PropTypes from "prop-types";

const ModalBody = props => (
  <div className="ModalBody">
    <div className="ModalHeader">
      <h2>{props.title}</h2>
      {props.handleAction && (
        <button onClick={props.handleAction}>{props.actionLabel}</button>
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
