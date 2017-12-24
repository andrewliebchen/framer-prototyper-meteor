import React from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import Accounts from "../components/Accounts.jsx";

import { deletePrototype } from "../lib/utils";

import FormInput from "../components/FormInput.jsx";

const Settings = props => (
  <div>
    <div className="ModalSection">
      <FormInput
        label="Prototype name"
        defaultValue={props.prototype.name}
        placeholder="Make it snappy"
        onChange={event =>
          Meteor.call("update", props.prototype._id, {
            name: event.target.value
          })}
      />
      <div className="Form">
        <label className="FormLabel">Syntax</label>
        <p>
          If you change syntax, your prototype may not run as you expect. be
          sure to go back an manually convert necessary code.
        </p>
        <select
          defaultValue={props.prototype.syntax}
          onChange={event =>
            Meteor.call("update", props.prototype._id, {
              syntax: event.target.value
            })}
        >
          <option value="javascript">JavaScript</option>
          <option value="coffeescript">CoffeeScript</option>
        </select>
      </div>
      <FormInput
        label="URL"
        value={window.location.href}
        copy={window.location.href}
        disabled
      />
    </div>
    <div className="ModalSection">
      <h2>Account</h2>
      <Accounts />
    </div>
    <div className="ModalSection">
      <h2>Danger zone</h2>
      <button
        className="negative block"
        onClick={() => deletePrototype(props.prototype_id)}
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
