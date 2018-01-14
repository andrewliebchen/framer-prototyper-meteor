import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Transition from "react-transition-group/Transition";
import { Flex } from "reflexbox";

import Utilities from "./Utilities.jsx";
import Settings from "./Settings.jsx";
import PrototypesList from "./PrototypesList.jsx";

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

class Modal extends Component {
  _renderModalContent() {
    switch (this.props.modal) {
      case "Settings":
        return <Settings {...this.props} />;
      case "Prototypes":
        return (
          <PrototypesList
            showSettings={() => this.setState({ modal: "Settings" })}
            {...this.props}
          />
        );
      case "Utilities":
        return (
          <Utilities
            toggleSampleData={() =>
              this.setState({
                prototypeSampleData: !this.props.prototypeSampleData
              })
            }
            {...this.props}
          />
        );
      default:
        return <div />;
    }
  }

  render() {
    return (
      <div>
        <div
          className={classNames({
            Underlay: true,
            showModal: this.props.show
          })}
        >
          {this.props.children}
        </div>
        <Transition in={this.props.show ? true : false} timeout={modalDuration}>
          {state => (
            <div
              className="Modal"
              style={{
                ...modalDefaultStyle,
                ...modalTransitionStyles[state]
              }}
            >
              {this._renderModalContent()}
            </div>
          )}
        </Transition>
        {this.props.show && (
          <div className="ModalBackground" onClick={this.props.close} />
        )}
      </div>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["Settings", "Prototypes", "Utilities"])
  ]),
  close: PropTypes.func,
  title: PropTypes.string
};

export default Modal;
