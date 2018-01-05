import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import AceEditor from "react-ace";
import { Flex, Box } from "reflexbox";
import { Trash2 } from "react-feather";
import stringify from "json-stringify-pretty-compact";

import FormInput from "./FormInput.jsx";
import FormSelect from "./FormSelect.jsx";
import Button from "./Button.jsx";

import fakerFields from "../lib/fakerFields";

import "../styles/DataInspector.css";

import "brace/mode/javascript";
import "../lib/tomorrow_night_eighties";

const DataGroup = props => (
  <div className="DataGroup">
    <Flex justify="space-around">
      <Box auto>
        <FormInput
          label="Group name"
          defaultValue={props.data.name}
          placeholder="Descriptive name, no spaces!"
          onChange={event =>
            Meteor.call("updateData", props.data._id, {
              name: event.target.value
            })}
        />
      </Box>
      <Box w={1 / 4} style={{ paddingLeft: "1em" }}>
        <FormInput
          label="Count"
          defaultValue={props.data.count || 0}
          type="number"
          onChange={event =>
            Meteor.call("updateData", props.data._id, {
              count: event.target.value
            })}
        />
      </Box>
      <Box style={{ marginLeft: "1em" }} data-tip="Delete group">
        <Trash2
          onClick={() => Meteor.call("deteteDataGroup", props.data._id)}
        />
      </Box>
    </Flex>
    <div className="Form">
      <label className="FormLabel">Fields</label>
      <div className="DataGroupFields">
        {props.data.fields.map(field => (
          <Flex align="center" className="DataGroupRow" key={field.id}>
            <Box auto>
              <select
                defaultValue={field.name}
                onChange={event =>
                  Meteor.call("updateField", props.data._id, {
                    id: field.id,
                    name: event.target.value
                  })}
              >
                {fakerFields.map(group => (
                  <optgroup key={group.name} label={group.name}>
                    {group.options.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </Box>
            <Box style={{ marginLeft: "1em" }} data-tip="Delete field">
              <Trash2 />
            </Box>
          </Flex>
        ))}
        <Flex justify="center" className="DataGroupRowAction">
          <Box>
            <a onClick={() => Meteor.call("newField", props.data._id)}>
              Add a field
            </a>
          </Box>
        </Flex>
      </div>
    </div>
  </div>
);

const DataInspector = props => (
  <div>
    <div className="ModalSection">
      <label className="FormLabel">Sample</label>
      <div className="Form">
        <AceEditor
          mode="javascript"
          theme="tomorrow_night_eighties"
          name="dataSample"
          value={`${props.data[0].name} = ${stringify(props.dataSample)}`}
          width="390px"
          maxLines={5}
          tabSize={2}
          softTabs={false}
          showInvisibles
          readOnly
          highlightActiveLine={false}
          highlightGutterLine={false}
          editorProps={{
            $blockScrolling: true
          }}
          style={{
            fontSize: "16px",
            lineHeight: "28px"
          }}
        />
      </div>
      <FormInput
        label="Code sample"
        value={"print DATA"}
        copy={"print DATA"}
        style={{ fontFamily: "monospace" }}
        disabled
      />
      <Button
        label="Refresh"
        block
        onClick={() => Meteor.call("refreshData", props.data._id)}
      />
    </div>
    <div className="ModalSection">
      <h3>Configure data</h3>
      <p>
        Exercitation officia irure mollit adipisicing laboris culpa. In veniam
        pariatur sunt et sint.
      </p>
      {props.data.map(data => <DataGroup key={data._id} data={data} />)}
      <Button
        label="Add a group"
        block
        onClick={() => Meteor.call("newData", props.prototype._id)}
      />
    </div>
  </div>
);

DataInspector.propTypes = {
  data: PropTypes.array,
  prototype: PropTypes.object,
  dataSample: PropTypes.array
};

export default DataInspector;
