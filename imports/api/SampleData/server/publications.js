import { Meteor } from "meteor/meteor";
import SampleData from "../SampleData";

Meteor.publish("sampleData", id => {
  return SampleData.find({ prototype: id });
});
