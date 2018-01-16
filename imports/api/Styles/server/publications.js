import { Meteor } from "meteor/meteor";
import Styles from "../Styles";

Meteor.publish("styles", id => {
  return Styles.find({ prototype: id });
});
