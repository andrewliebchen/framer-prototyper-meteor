import React from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import Accounts from "../components/Accounts.jsx";
import { toast } from "react-toastify";

import { deletePrototype } from "../lib/utils";

import FormInput from "./FormInput.jsx";
import FormSelect from "./FormSelect.jsx";

const syntaxOptions = [
  { value: "javascript", label: "JavaScript" },
  { value: "coffeescript", label: "CoffeeScript" }
];

const isLoggedIn = Meteor.userId() ? true : false;

const Settings = props => (
  <div>
    <div className="ModalSection">
      {isLoggedIn && (
        <FormInput
          label="Prototype name"
          defaultValue={props.prototype.name}
          placeholder="Make it snappy"
          onChange={event =>
            Meteor.call(
              "update",
              props.prototype._id,
              {
                name: event.target.value
              },
              (err, success) => {
                if (success) {
                  if (!toast.isActive(this.toastId)) {
                    this.toastId = toast("Name has been updated!");
                  }
                }
                if (err) {
                  toast("Whoops, there was a problem", { type: "error" });
                }
              }
            )}
        />
      )}
      <FormSelect
        label="Syntax"
        hint="If you change syntax, we'll automatically convert your code to the syntax you choose. Please double check the converted code, or your prototype may not run as you expect. "
        defaultValue={props.prototype.syntax}
        options={syntaxOptions}
        onChange={event =>
          Meteor.call(
            "updateSyntax",
            props.prototype._id,
            {
              syntax: event.target.value,
              code: props.prototype.code
            },
            (err, success) => {
              if (success) {
                toast("Syntax updated!");
              }
              if (err) {
                toast("Whoops, there was a problem", { type: "error" });
              }
            }
          )}
      />
      <FormInput
        label="URL"
        value={window.location.href}
        copy={window.location.href}
        hint={
          isLoggedIn
            ? ""
            : "Unless you're logged in, anyone with the prototype URL can edit it."
        }
        disabled
      />
    </div>
    <div className="ModalSection">
      <h2>Account</h2>
      {isLoggedIn || (
        <p>
          Sign in with Google to save this prototype. Once you've saved a
          prototype, only you can edit it.
        </p>
      )}
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
  changeRefresh: PropTypes.func
};

export default Settings;
