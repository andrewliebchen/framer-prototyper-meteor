import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import AceEditor from "react-ace";
import stringify from "json-stringify-pretty-compact";

import FormInput from "./FormInput.jsx";
import Button from "./Button.jsx";
import SampleDataGroup from "./SampleDataGroup.jsx";
import Editor from "./Editor.jsx";

import "brace/mode/javascript";
import "../lib/tomorrow_night_eighties";

const SampleDataInspector = props => (
  <div>
    <div className="ModalSection">
      <label className="FormLabel">Sample</label>
      <div className="Form">
        <AceEditor
          mode="javascript"
          name="dataSample"
          value={
            props.prototypeSampleData
              ? stringify(props.prototypeSampleData)
              : "No sample data"
          }
          width="448px"
          maxLines={10}
          readOnly
        />
      </div>
      <FormInput
        label="Include in your prototype"
        value={
          props.prototype.syntax === "coffeescript"
            ? "print DATA"
            : "print(Data);"
        }
        copy={
          props.prototype.syntax === "coffeescript"
            ? "print DATA"
            : "print(Data);"
        }
        style={{ fontFamily: "monospace" }}
        disabled
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
