import React from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import { Trash2, Settings } from "react-feather";
import timeago from "timeago.js";
import { Flex, Box } from "reflexbox";
import classnames from "classnames";
import { Link } from "react-router-dom";

import Button from "./Button.jsx";
import { deletePrototype } from "../lib/utils";

import "../styles/PrototypesList.css";

const timeagoInstance = timeago();

const PrototypesList = props => (
  <div>
    <div className="PrototypeListHeader">
      <Button
        onClick={() =>
          Meteor.call("newPrototype", {
            createdAt: Date.now(),
            owner: Meteor.userId()
          })}
        label="New Prototype"
        block
      />
    </div>
    {props.prototypes.map(prototype => {
      const isCurrent = prototype._id === props.prototype._id;
      return (
        <Link to={`/${prototype._id}`} key={prototype._id}>
          <Flex
            className={classnames({
              PrototypeItem: true,
              Current: isCurrent
            })}
            justify="space-between"
          >
            <Box>
              <h3>{prototype.name || "Untitled"}</h3>
              <div>Created {timeagoInstance.format(prototype.createdAt)}</div>
              <div>Updated {timeagoInstance.format(prototype.updatedAt)}</div>
            </Box>
            <Box className="PrototypeItemActions">
              <Settings
                className="PrototypeItemAction"
                onClick={props.showSettings}
              />
              <Trash2
                className="PrototypeItemAction Delete"
                onClick={event => {
                  event.preventDefault();
                  deletePrototype(prototype._id);
                }}
              />
            </Box>
          </Flex>
        </Link>
      );
    })}
  </div>
);

PrototypesList.propTypes = {
  prototypes: PropTypes.array,
  prototype: PropTypes.object,
  showSettings: PropTypes.func
};

export default PrototypesList;
