import { Meteor } from "meteor/meteor";
import Styles from "../Styles";

Meteor.publish("sampleData", id => {
  return Styles.find({ prototype: id });
});
