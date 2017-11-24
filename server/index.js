import { Meteor } from "meteor/meteor";
import { Prototypes } from "../imports/api/prototypes";

const initialCode = `const layerA = new Layer({
  x: Align.center,
  y: Align.center,
  backgroundColor: new Color('blue').alpha(0.5),
});`;

Meteor.methods({
  newPrototype(args) {
    return Prototypes.insert({
      code: intialCode,
      createdAt: args.createdAt,
      updatedAt: args.createdAt,
      owner: args.currentUserId
    });
  },

  updateCode(args) {
    return Prototypes.update(args.id, {
      $set: {
        code: args.code,
        updatedAt: args.createdAt
      }
    });
  }
});
