import React from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import AccountsUIWrapper from "../components/AccountsUIWrapper.jsx";

import FormInput from "../components/FormInput.jsx";

const Settings = props => (
  <div>
    <div className="ModalSection">
      <FormInput
        label="Prototype name"
        defaultValue={props.prototype.name}
        placeholder="Make it snappy"
        onChange={event =>
          Meteor.call(
            "updateName",
            {
              id: props.prototype._id,
              name: event.target.value
            },
            (err, success) => console.log("Update status badge") //FIXME
          )}
      />
      <FormInput
        label="URL"
        value={window.location.href}
        copy={window.location.href}
        disabled
      />
    </div>
    <div className="ModalSection">
      <h2>Account</h2>
      <AccountsUIWrapper />
    </div>
    <div className="ModalSection">
      <h2>Danger zone</h2>
      <button
        className="negative block"
        onClick={() => {
          if (
            window.confirm("Are you sure you want to delete this prototype?")
          ) {
            Meteor.call("deletePrototype", props.prototype._id);
          }
        }}
      >
        Delete prototype
      </button>
    </div>
  </div>
);

Settings.propTypes = {
  prototype: PropTypes.object,
  updateStatusBadge: PropTypes.func
};

export default Settings;
