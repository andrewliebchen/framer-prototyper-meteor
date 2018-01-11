import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";

import FormSelect from "./FormSelect.jsx";
import FormInput from "./FormInput.jsx";
import Editor from "./Editor.jsx";
import Button from "./Button.jsx";

import fakerFields from "../lib/fakerFields";

import "../styles/SampleDataGroup.css";

const SampleDataGroup = props => (
  <div className="SampleDataGroup">
    <Flex justify="space-around">
      <Box auto>
        <FormInput
          label="name"
          defaultValue={props.sampleData.name}
          placeholder="Descriptive name, no spaces!"
          style={{ fontFamily: "monospace" }}
          onChange={event =>
            Meteor.call("updateSampleDataGroup", props.sampleData._id, {
              name: event.target.value
            })
          }
        />
      </Box>
      <Box w={1 / 4} style={{ paddingLeft: "1em" }}>
        <FormInput
          label="Count"
          defaultValue={props.sampleData.count || 0}
          type="number"
          onChange={event =>
            Meteor.call("updateSampleDataGroup", props.sampleData._id, {
              count: event.target.value
            })
          }
        />
      </Box>
    </Flex>
    <div className="Form">
      <Editor
        mode="javascript"
        value={props.sampleData.code}
        width="418px"
        maxLines={10}
        setOptions={{ useWorker: false }}
        onChange={event =>
          Meteor.call("updateSampleDataGroup", props.sampleData._id, {
            code: event
          })
        }
      />
    </div>
    <Flex>
      <Box w={1 / 4}>
        <a
          className="SampleDataGroupDelete"
          onClick={() => {
            if (window.confirm("Are you sure you want to delete this group?")) {
              Meteor.call("deleteSampleDataGroup", props.sampleData._id);
            }
          }}
        >
          Delete
        </a>
      </Box>
      <Box auto>
        <Button
          label="Refresh"
          block
          disabled={!props.sampleData.name}
          onClick={() => Meteor.call("refreshSampleData", props.sampleData)}
        />
      </Box>
    </Flex>
  </div>
);

SampleDataGroup.propTypes = {
  sampleData: PropTypes.object
};

export default SampleDataGroup;
