import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Transition from "react-transition-group/Transition";
import { X } from "react-feather";
import { Flex } from "reflexbox";

import "../styles/Modal.css";

const modalDuration = 200;
const modalDefaultStyle = {
  boxShadow: "none",
  pointerEvents: "none",
  transform: "translateX(100%)",
  transition: `${modalDuration}ms ease-out`,
  transitionDelay: 0.15
};
const modalTransitionStyles = {
  entered: {
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
    opacity: 1,
    pointerEvents: "all",
    transform: "translateX(0)"
  },
  exiting: {
    transition: `100ms ease-in`
  }
};

const Modal = props => (
  <div>
    <div
      className={classNames({
        Underlay: true,
        showModal: props.show
      })}
    >
      {props.children}
    </div>
    <Transition in={props.show} timeout={modalDuration}>
      {state => (
        <div
          className="Modal"
          style={{
            ...modalDefaultStyle,
            ...modalTransitionStyles[state]
          }}
        >
          {props.content}
        </div>
      )}
    </Transition>
    {props.show && <div className="ModalBackground" onClick={props.close} />}
  </div>
);

Modal.propTypes = {
  show: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  content: PropTypes.element,
  close: PropTypes.func,
  title: PropTypes.string
};

export default Modal;
