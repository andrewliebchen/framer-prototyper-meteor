import React, { Component } from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";

import FormLabel from "./FormLabel.jsx";

const Form = styled(Flex)`
  margin-bottom: 1em;
  position: relative;
`;

const InputWrapper = styled(Box)`
  position: relative;
`;

const Copy = styled.div`
  position: absolute;
  top: 50%;
  right: 1px;
  transform: translate3d(0, -50%, 0);
  background-image: linear-gradient(
    to right,
    transparent,
    var(--color-gray-4) 50%
  );
  cursor: pointer;
  padding: 0 0.5em 0 3em;
  letter-spacing: var(--letter-spacing);
  text-transform: uppercase;
  color: var(--color-accent);
`;

const Hint = styled.small`
  padding-top: 0.5em;
`;

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
  }

  render() {
    const {
      label,
      type,
      placeholder,
      defaultValue,
      copy,
      disabled,
      hint
    } = this.props;
    return (
      <Form column>
        <Box>
          <FormLabel>{label}</FormLabel>
        </Box>
        <InputWrapper>
          <input
            className="FormInput"
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
            disabled={disabled}
          />
          {copy && (
            <Copy>
              <CopyToClipboard
                text={copy}
                onCopy={() => {
                  this.setState({ copied: true });
                  setTimeout(() => this.setState({ copied: false }), 4000);
                }}
              >
                <span>{this.state.copied ? "Copied!" : "Copy"}</span>
              </CopyToClipboard>
            </Copy>
          )}
        </InputWrapper>
        <Hint>{hint}</Hint>
      </Form>
    );
  }
}

FormInput.defaultProps = {
  type: "text"
};

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "number"]),
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  copy: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

export default FormInput;
