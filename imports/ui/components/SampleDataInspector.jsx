import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import AceEditor from "react-ace";
import stringify from "json-stringify-pretty-compact";

import FormInput from "./FormInput.jsx";
import Button from "./Button.jsx";
import SampleDataGroup from "./SampleDataGroup.jsx";

import "brace/mode/javascript";
import "../lib/tomorrow_night_eighties";

const SampleDataInspector = props => (
  <div>
    <div className="ModalSection">
      <label className="FormLabel">Sample</label>
      <div className="Form">
        <AceEditor
          mode="javascript"
          theme="tomorrow_night_eighties"
          name="dataSample"
          value={
            props.prototypeSampleData
              ? stringify(props.prototypeSampleData)
              : "No sample data"
          }
          width="448px"
          maxLines={10}
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
        onClick={() => Meteor.call("refreshSampleData", props.sampleData._id)}
      />
    </div>
    <div className="ModalSection">
      <h3>Configure data</h3>
      <p>
        Exercitation officia irure mollit adipisicing laboris culpa. In veniam
        pariatur sunt et sint.
      </p>
      {props.sampleData.map(data => (
        <SampleDataGroup key={data._id} sampleData={data} />
      ))}
      <Button
        label="Add a group"
        block
        onClick={() => Meteor.call("newSampleData", props.prototype._id)}
      />
    </div>
  </div>
);

SampleDataInspector.propTypes = {
  sampleData: PropTypes.array,
  prototype: PropTypes.object,
  prototypeSampleData: PropTypes.object
};

export default SampleDataInspector;
