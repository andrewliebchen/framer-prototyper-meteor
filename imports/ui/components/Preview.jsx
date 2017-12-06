import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactInterval from "react-interval";
import Frame from "react-frame-component";
// import { WindowResizeListener } from "react-window-resize-listener";
import { Flex, Box } from "reflexbox";
import Transition from "react-transition-group/Transition";

import PreviewControls from "../components/PreviewControls.jsx";

import "../styles/Preview.css";

const framerURI = "//builds.framerjs.com/version/latest/framer.js";
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
    this._reRender = this._reRender.bind(this);
  }

  _reRender() {
    this.setState({ renderCount: Date.now() });
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
          callback={this._reRender}
        />
        {/* <WindowResizeListener onResize={windowSize => this._reRender()} /> */}
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
              <Box
                className="PreviewBanner"
                onClick={togglePlaying}>Reload is paused</Box>
            </Flex>
          )}
        </Transition>
        <div className="PreviewFrame">
          <PreviewControls {...this.props} />
          {code && (
            <Frame
              key={this.state.renderCount}
              className="PreviewFrame"
              style={{
                width: this.props.full ? "100vw" : "50vw"
              }}
              initialContent={`
                <!DOCTYPE html>
                <html>
                  <head>
                    <style>
                      body {
                        height: 100vh;
                        width: 100vw;
                        margin: 0;
                        position: relative;
                      }

                      .framerContext {
                        height: 100vh;
                        width: 100vw;
                      }
                    </style>
                  </head>
                  <body>
                    <script src="${framerURI}"></script>
                    <script>
                      ${code}
                    </script>
                  </body>
                </html>`}
            />
          )}
        </div>
      </div>
    );
  }
}

Preview.propTypes = {
  prototype: PropTypes.object,
  playing: PropTypes.bool,
  full: PropTypes.bool,
  togglePlaying: PropTypes.func
};

export default Preview;
