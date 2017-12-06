import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Transition from "react-transition-group/Transition";
import { CheckCircle } from "react-feather";

import "../styles/Modal.css";

const statusDuration = 300;
const statusDefaultStyle = {
  transform: "translateY(-50%) scale(0)",
  transition: `${statusDuration}ms cubic-bezier(0.680, -0.550, 0.265, 1.550)`
};
const statusTransitionStyles = {
  entered: {
    transform: "translateY(-50%) scale(1)"
  }
};

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
          <div className="ModalHeader">
            <h2>{props.title}</h2>
            <Transition in={props.updated} timeout={statusDuration}>
              {state => (
                <div
                  className="ModalStatus"
                  style={{
                    ...statusDefaultStyle,
                    ...statusTransitionStyles[state]
                  }}
                >
                  <CheckCircle />
                </div>
              )}
            </Transition>
          </div>
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
  title: PropTypes.string,
  updated: PropTypes.bool
};

export default Modal;
