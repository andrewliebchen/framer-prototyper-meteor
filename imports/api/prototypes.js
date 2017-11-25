import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

export const Prototypes = new Mongo.Collection("prototypes");

if (Meteor.isServer) {
  Meteor.publish("prototype", id => {
    return Prototypes.find({ _id: id });
  });
}
