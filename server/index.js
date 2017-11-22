import { Meteor } from "meteor/meteor";
import { Prototypes } from "../imports/api/prototypes";

Meteor.startup(() => {
  if (Prototypes.find().count() === 0) {
    Prototypes.insert({});
  }
});
