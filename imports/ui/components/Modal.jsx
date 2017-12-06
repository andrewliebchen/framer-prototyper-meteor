import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Transition from "react-transition-group/Transition";

import "../styles/Modal.css";

const duration = 200;

const defaultStyle = {
  boxShadow: "none",
  pointerEvents: "none",
  transform: "translateX(100%)",
  transition: `${duration}ms ease-out`,
  transitionDelay: 0.15
};

const transitionStyles = {
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
    <Transition in={props.show} timeout={duration}>
      {state => (
        <div
          className="Modal"
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
        >
          <h2>{props.title}</h2>
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
