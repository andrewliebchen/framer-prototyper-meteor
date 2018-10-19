import {Flex, Box} from 'reflexbox';
import {initPreviewCode} from '../../lib/utils';
import classnames from 'classnames';
import Frame from 'react-frame-component';
import PreviewControls from '../components/PreviewControls';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ReactInterval from 'react-interval';

import '../styles/Preview.css';

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderCount: Date.now(),
    };
  }

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }

  render() {
    const {
      prototype,
      playing,
      full,
      togglePlaying,
      prototypeSampleData,
      prototypeStypes,
    } = this.props;
    const code = prototype ? prototype.code : '';

    return (
      <div className="Preview">
        <ReactInterval
          timeout={1000}
          enabled={playing}
          callback={() => this.setState({renderCount: Date.now()})}
        />
        <div
          className={classnames({
            PreviewFrame: true,
            Full: full,
          })}>
          <PreviewControls {...this.props} />
          {code && (
            <Frame
              key={this.state.renderCount}
              className="PreviewFrame"
              style={{
                width: this.props.full ? '100vw' : '50vw',
              }}
              initialContent={initPreviewCode({
                framerURI: '//builds.framerjs.com/version/latest/framer.js',
                coffeescriptURI:
                  '//cdnjs.cloudflare.com/ajax/libs/coffee-script/1.7.1/coffee-script.min.js',
                code: code,
                syntax: prototype.syntax,
                background: prototype.background,
                sampleData: prototypeSampleData,
                styles: prototypeStypes,
              })}
            />
          )}
        </div>
      </div>
    );
  }
}

Preview.defaultProps = {
  syntax: 'javascript',
};

Preview.propTypes = {
  prototype: PropTypes.object,
  playing: PropTypes.bool,
  full: PropTypes.bool,
  togglePlaying: PropTypes.func,
  prototypeSampleData: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  prototypeStypes: PropTypes.object,
};

export default Preview;
