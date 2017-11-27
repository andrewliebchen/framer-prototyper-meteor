import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactInterval from "react-interval";
import Frame from "react-frame-component";
// import { WindowResizeListener } from "react-window-resize-listener";
import { Flex, Box } from "reflexbox";
import Transition from "react-transition-group/Transition";

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
    // FIXME: Preview only is not getting data via id...?

    return (
      <div className="Preview">
        <ReactInterval
          timeout={1000}
          enabled={this.props.playing}
          callback={this._reRender}
        />
        {/* <WindowResizeListener onResize={windowSize => this._reRender()} /> */}
        <Transition in={!this.props.playing} timeout={duration}>
          {state => (
            <Flex
              className="PreviewBanner"
              align="center"
              justify="center"
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              <Box>Reload is paused</Box>
            </Flex>
          )}
        </Transition>
        <div className="PreviewFrame">
          {this.props.code && (
            <Frame
              key={this.state.renderCount}
              className="PreviewFrame"
              style={{
                width: this.props.fullScreen ? "100vw" : "50vw"
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
                      ${this.props.code}
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
  code: PropTypes.string,
  playing: PropTypes.bool,
  fullScreen: PropTypes.bool
};

export default Preview;
