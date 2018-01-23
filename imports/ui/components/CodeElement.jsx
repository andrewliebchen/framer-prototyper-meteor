import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
import _ from "lodash";

import FormSelect from "./FormSelect.jsx";
import FormInput from "./FormInput.jsx";
import Editor from "./Editor.jsx";
import Button from "./Button.jsx";

import "../styles/SampleDataGroup.css";

const CodeElement = props => (
  <div className="SampleDataGroup">
    <Flex justify="space-around">
      <Box auto>
        <FormInput
          label="name"
          defaultValue={props.defaultNameValue}
          placeholder="Descriptive name, no spaces!"
          style={{ fontFamily: "monospace" }}
          onChange={props.handleNameUpdate}
        />
      </Box>
      {_.isNumber(props.count) && (
        <Box w={1 / 4} style={{ paddingLeft: "1em" }}>
          <FormInput
            label="Count"
            defaultValue={props.count}
            type="number"
            onChange={props.handleCountUpdate}
          />
        </Box>
      )}
    </Flex>
    <div className="Form">
      <Editor
        mode="javascript"
        value={props.code}
        width="418px"
        maxLines={10}
        onChange={props.handleCodeUpdate}
      />
    </div>
    <Flex>
      <Box w={1 / 4}>
        <a className="SampleDataGroupDelete" onClick={props.handleDelete}>
          Delete
        </a>
      </Box>
      <Box auto>
        <Button block disabled={props.disabled} onClick={props.handleRefresh}>
          Refresh
        </Button>
      </Box>
    </Flex>
  </div>
);

CodeElement.propTypes = {
  collection: PropTypes.object,
  defaultNameValue: PropTypes.string,
  handleNameUpdate: PropTypes.func,
  // count: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  handleCountUpdate: PropTypes.func,
  code: PropTypes.string,
  handleCodeUpdate: PropTypes.func,
  handleDelete: PropTypes.func,
  disabled: PropTypes.bool,
  handleRefresh: PropTypes.func
};

export default CodeElement;
