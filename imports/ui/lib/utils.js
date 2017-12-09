import { Meteor } from "meteor/meteor";

export const deletePrototype = id => {
  if (window.confirm("Are you sure you want to delete this prototype?")) {
    Meteor.call("deletePrototype", id);
  }
};
