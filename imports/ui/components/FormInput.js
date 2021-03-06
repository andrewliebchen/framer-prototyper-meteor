import {Flex, Box} from 'reflexbox';
import CopyToClipboard from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import '../styles/FormInput.css';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }

  render() {
    return (
      <Flex className="Form" column>
        <Box>
          <label className="FormLabel">{this.props.label}</label>
        </Box>
        <Box className="FormInputWrapper">
          <input className="FormInput" {...this.props} />
          {this.props.copy && (
            <div className="FormCopy">
              <CopyToClipboard
                text={this.props.copy}
                onCopy={() => {
                  this.setState({copied: true});
                  setTimeout(() => this.setState({copied: false}), 4000);
                }}>
                <span>{this.state.copied ? 'Copied!' : 'Copy'}</span>
              </CopyToClipboard>
            </div>
          )}
        </Box>
        <small className="FormHint">{this.props.hint}</small>
      </Flex>
    );
  }
}

FormInput.defaultProps = {
  type: 'text',
};

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number']),
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  copy: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default FormInput;
