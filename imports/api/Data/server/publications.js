import { Meteor } from "meteor/meteor";
import Data from "../Data";

Meteor.publish("data", id => {
  return Data.find({ prototype: id });
});
