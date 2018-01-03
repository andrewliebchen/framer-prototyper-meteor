import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import ReactInterval from "react-interval";
import Frame from "react-frame-component";
import { Flex, Box } from "reflexbox";
import Transition from "react-transition-group/Transition";

import PreviewControls from "../components/PreviewControls.jsx";

import { initPreviewCode } from "../lib/utils";

import "../styles/Preview.css";

const duration = 100;
const defaultStyle = {
  transform: "translateY(-100%)",
  transition: `${duration}ms cubic-bezier(0.445,  0.050, 0.550, 0.950)`
};
const transitionStyles = {
  entered: {
    transform: "translateY(0%)"
  }
};

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderCount: Date.now()
    };
  }

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }

  render() {
    const { prototype, playing, full, togglePlaying } = this.props;
    const code = prototype ? prototype.code : "";

    return (
      <div className="Preview">
        <ReactInterval
          timeout={1000}
          enabled={playing}
          callback={() => this.setState({ renderCount: Date.now() })}
        />
        <Transition in={!playing} timeout={duration}>
          {state => (
            <Flex
              className="PreviewBannerWrapper"
              align="center"
              justify="center"
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              <Box className="PreviewBanner" onClick={togglePlaying}>
                Reload is paused
              </Box>
            </Flex>
          )}
        </Transition>
        <div
          className={classnames({
            PreviewFrame: true,
            Full: full
          })}
        >
          <PreviewControls {...this.props} />
          {code && (
            <Frame
              key={this.state.renderCount}
              className="PreviewFrame"
              style={{
                width: this.props.full ? "100vw" : "50vw"
              }}
              initialContent={initPreviewCode({
                framerURI: "//builds.framerjs.com/version/latest/framer.js",
                coffeescriptURI:
                  "//cdnjs.cloudflare.com/ajax/libs/coffee-script/1.7.1/coffee-script.min.js",
                code: code,
                syntax: prototype.syntax,
                background: prototype.background
              })}
            />
          )}
        </div>
      </div>
    );
  }
}

Preview.defaultProps = {
  syntax: "javascript"
};

Preview.propTypes = {
  prototype: PropTypes.object,
  playing: PropTypes.bool,
  full: PropTypes.bool,
  togglePlaying: PropTypes.func
};

export default Preview;
