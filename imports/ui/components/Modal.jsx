import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Transition from "react-transition-group/Transition";
import { Flex } from "reflexbox";
import styled from "styled-components";

import Utilities from "./Utilities.jsx";
import Settings from "./Settings.jsx";
import PrototypesList from "./PrototypesList.jsx";

const ModalElement = styled.div`
  position: fixed;
  background-color: white;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 2em;
  width: var(--width-modal);
  z-index: 9999;
  overflow: auto;
  will-change: transform;
`;

const Background = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 9998;
  top: 0;
  left: 0;
`;

const Underlay = styled.div`
  transition: var(--transition);
  will-change: transform, opacity;
  transform: ${props => props.show && "scale(0.9)"};
  opacity: ${props => props.show && 0.2};
  box-shadow: ${props => props.show && "0 0 0 1px var(--color-gray-2)"};
`;

// How to do this with styled components?
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
        <Underlay>{this.props.children}</Underlay>
        <Transition in={this.props.show ? true : false} timeout={modalDuration}>
          {state => (
            <Modal
              style={{
                ...modalDefaultStyle,
                ...modalTransitionStyles[state]
              }}
            >
              {this._renderModalContent()}
            </Modal>
          )}
        </Transition>
        {this.props.show && <Background onClick={this.props.close} />}
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
