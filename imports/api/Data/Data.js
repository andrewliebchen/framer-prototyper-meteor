import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

const Data = new Mongo.Collection("data");

export default Data;
