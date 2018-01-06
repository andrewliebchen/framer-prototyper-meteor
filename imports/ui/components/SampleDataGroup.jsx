import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
import { Trash2 } from "react-feather";

import FormSelect from "./FormSelect.jsx";
import FormInput from "./FormInput.jsx";

import fakerFields from "../lib/fakerFields";

import "../styles/SampleDataGroup.css";

const SampleDataGroupRow = props => (
  <Flex align="center" className="SampleDataGroupRow">
    <Box auto>
      <select
        defaultValue={props.field.name}
        onChange={event =>
          Meteor.call("updateSampleDataField", props.sampleData._id, {
            id: props.field.id,
            name: event.target.value
          })}
      >
        {fakerFields.map(group => (
          <optgroup key={group.name} label={group.name}>
            {group.options.map(option => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </Box>
    <Box data-tip="Delete field">
      <Trash2 className="ActionIcon Delete" />
    </Box>
  </Flex>
);

const SampleDataGroup = props => (
  <div className="SampleDataGroup">
    <Flex justify="space-around">
      <Box auto>
        <FormInput
          label="Group name"
          defaultValue={props.sampleData.name}
          placeholder="Descriptive name, no spaces!"
          onChange={event =>
            Meteor.call("updateSampleDataGroup", props.sampleData._id, {
              name: event.target.value
            })}
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
            })}
        />
      </Box>
    </Flex>
    <div className="Form">
      <label className="FormLabel">Fields</label>
      <div className="SampleDataGroupFields">
        {props.sampleData.fields.map(field => (
          <SampleDataGroupRow field={field} key={field.id} {...props} />
        ))}
        <Flex justify="center" className="SampleDataGroupRowAction">
          <Box>
            <a
              onClick={() =>
                Meteor.call("newSampleDataField", props.sampleData._id)}
            >
              Add a field
            </a>
          </Box>
        </Flex>
      </div>
    </div>
  </div>
);

SampleDataGroup.propTypes = {
  sampleData: PropTypes.object
};

export default SampleDataGroup;
