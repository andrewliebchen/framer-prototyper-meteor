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
      code: initialCode,
      createdAt: args.createdAt,
      updatedAt: args.createdAt,
      owner: args.owner
    });
  },

  updateName(args) {
    return Prototypes.update(args.id, {
      $set: {
        name: args.name
      }
    });
  },

  updateCode(args) {
    return Prototypes.update(args.id, {
      $set: {
        code: args.code,
        updatedAt: args.createdAt
      }
    });
  },

  deletePrototype(id) {
    return Prototypes.remove(id);
  }
});
