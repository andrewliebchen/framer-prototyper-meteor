import { Meteor } from "meteor/meteor";
import { Prototypes } from "../imports/api/prototypes";

const initialCode = `const layerA = new Layer({
  x: Align.center,
  y: Align.center,
  backgroundColor: new Color('blue').alpha(0.5),
});`;

Meteor.startup(() => {
  if (Prototypes.find().count() === 0) {
    Prototypes.insert({
      code: initialCode
    });
  }
});

Meteor.methods({
  updateCode(args) {
    return Prototypes.update(args.id, {
      $set: {
        code: args.code
      }
    });
  }
});
