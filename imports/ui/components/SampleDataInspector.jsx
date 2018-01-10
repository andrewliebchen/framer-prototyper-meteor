import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import AceEditor from "react-ace";
import stringify from "json-stringify-pretty-compact";

import FormInput from "./FormInput.jsx";
import Button from "./Button.jsx";
import SampleDataGroup from "./SampleDataGroup.jsx";
import Editor from "./Editor.jsx";
import Toggle from "./Toggle.jsx";

import "brace/mode/javascript";
import "../lib/tomorrow_night_eighties";

const disabledStyle = {
  opacity: 0.6,
  filter: "blur(5px)",
  pointerEvents: "none"
};

const SampleDataInspector = props => (
  <div>
    <div className="ModalSection">
      <h3>Sample data</h3>
      <p>
        Exercitation officia irure mollit adipisicing laboris culpa. In veniam
        pariatur sunt et sint.
      </p>
      <Toggle
        on={props.prototypeSampleData}
        label="Include sample data in prototype"
        onToggle={props.toggleSampleData}
      />
    </div>
    <div
      className="ModalSection"
      style={props.prototypeSampleData ? {} : disabledStyle}
    >
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
  prototypeSampleData: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  toggleSampleData: PropTypes.func
};

export default SampleDataInspector;
