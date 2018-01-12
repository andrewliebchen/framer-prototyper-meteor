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
      <h3>Sample data</h3>
      <p>
        Exercitation officia irure mollit adipisicing laboris culpa. In veniam
        pariatur sunt et sint.
      </p>
    </div>
    <div className="ModalSection">
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
