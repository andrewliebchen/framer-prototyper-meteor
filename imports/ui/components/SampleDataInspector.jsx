import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import Button from "./Button.jsx";
import CodeElement from "./CodeElement.jsx";

import "brace/mode/javascript";
import "../../lib/tomorrow_night_eighties";

const SampleDataInspector = props => (
  <div className="ModalSection">
    <h3>Sample data</h3>
    <p>
      Exercitation officia irure mollit adipisicing laboris culpa. In veniam
      pariatur sunt et sint.
    </p>
    {props.sampleData.map(data => (
      <CodeElement
        key={data._id}
        collection={data}
        defaultNameValue={data.name}
        handleNameUpdate={event =>
          Meteor.call("updateSampleDataGroup", data._id, {
            name: event.target.value
          })
        }
        count={data.count || 0}
        handleCountUpdate={event =>
          Meteor.call("updateSampleDataGroup", data._id, {
            count: event.target.value
          })
        }
        code={data.code}
        handleCodeUpdate={event =>
          Meteor.call("updateSampleDataGroup", data._id, {
            code: event
          })
        }
        handleDelete={() => {
          if (window.confirm("Are you sure you want to delete this group?")) {
            Meteor.call("deleteSampleDataGroup", data._id);
          }
        }}
        disabled={!data.name}
        handleRefresh={() =>
          Meteor.call("refreshSampleData", data, (err, success) => {
            // Not sure why success generates 0...but whatever
            if (success === 0) {
              toast("New sample data was generated!");
            }
          })
        }
      />
    ))}
    <Button
      block
      onClick={() => Meteor.call("newSampleData", props.prototype._id)}
    >
      Add a group
    </Button>
  </div>
);

SampleDataInspector.propTypes = {
  sampleData: PropTypes.array,
  prototype: PropTypes.object,
  prototypeSampleData: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  toggleSampleData: PropTypes.func
};

export default SampleDataInspector;
