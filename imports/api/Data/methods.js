import { Meteor } from "meteor/meteor";

import Data from "./Data";

Meteor.methods({
  newData(id) {
    return Data.insert({
      createdAt: Date.now(),
      prototype: id,
      fields: [],
      value: []
    });
  },

  updateData(id, args) {
    return Data.update(id, {
      $set: {
        ...args,
        updatedAt: Date.now()
      }
    });
  },

  deteteDataGroup(id) {
    return Data.remove(id);
  }
});
