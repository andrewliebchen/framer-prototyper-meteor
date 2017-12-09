import React from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import { Trash2, Settings } from "react-feather";
import timeago from "timeago.js";
import { Flex, Box } from "reflexbox";
import classnames from "classnames";

import { deletePrototype } from "../lib/utils";

import "../styles/PrototypesList.css";

const timeagoInstance = timeago();

const PrototypesList = props => (
  <div>
    <button
      onClick={() =>
        Meteor.call("newPrototype", {
          createdAt: Date.now(),
          owner: Meteor.userId()
        })}
    >
      New Prototype
    </button>
    {props.prototypes.map(prototype => {
      const isCurrent = prototype._id === props.prototype._id;
      return (
        <Flex
          className={classnames({
            PrototypeItem: true,
            Current: isCurrent
          })}
          key={prototype._id}
        >
          <Box>
            <h3>{prototype.name || "Untitled"}</h3>
            <div>Created {timeagoInstance.format(prototype.createdAt)}</div>
            <div>Updated {timeagoInstance.format(prototype.updatedAt)}</div>
          </Box>
          <Box>
            <Trash2 onClick={() => deletePrototype(prototype._id)} />
            {isCurrent && <Settings onClick={props.showSettings} />}
          </Box>
        </Flex>
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
