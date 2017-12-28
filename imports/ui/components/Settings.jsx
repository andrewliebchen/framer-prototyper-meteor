import React, { Component } from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import Accounts from "../components/Accounts.jsx";
import { toast } from "react-toastify";

import { deletePrototype } from "../lib/utils";
import Strings from "../lib/strings";

import FormInput from "./FormInput.jsx";
import FormSelect from "./FormSelect.jsx";

const Settings = props => (
  <div>
    <div className="ModalSection">
      {props.isLoggedIn && (
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
        hint={Strings.settings.syntax}
        defaultValue={props.prototype.syntax}
        disabled={!props.canEdit}
        options={[
          { value: "javascript", label: "JavaScript" },
          { value: "coffeescript", label: "CoffeeScript" }
        ]}
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
          props.prototype.owner || props.isLoggedIn
            ? Strings.settings.url.signedIn
            : Strings.settings.url.signedOut
        }
        disabled
      />
    </div>
    {props.canClaim && (
      <div className="ModalSection">
        <h2>Account</h2>
        {props.isLoggedIn || <p>{Strings.settings.account.notLoggedIn}</p>}
        <Accounts />
      </div>
    )}
    {props.isOwner && (
      <div className="ModalSection">
        <h2>Danger zone</h2>
        <button
          className="negative block"
          onClick={() => deletePrototype(props.prototype._id)}
        >
          Delete prototype
        </button>
      </div>
    )}
  </div>
);

Settings.propTypes = {
  prototype: PropTypes.object,
  isLoggedIn: PropTypes.bool,
  isOwner: PropTypes.bool,
  canClaim: PropTypes.bool,
  canEdit: PropTypes.bool
};

export default Settings;
