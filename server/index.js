import { Meteor } from "meteor/meteor";
import js2coffee from "js2coffee";
import CoffeeScript from "coffeescript";

import { Prototypes } from "../imports/api/prototypes";

const initialCode = `const layerA = new Layer({
  x: Align.center,
  y: Align.center,
  backgroundColor: new Color('blue').alpha(0.5),
});`;

Meteor.publish("prototype", id => {
  return Prototypes.find({ _id: id });
});

Meteor.publish("prototypes", userId => {
  return Prototypes.find({ owner: userId });
});

Meteor.methods({
  newPrototype(args) {
    return Prototypes.insert({
      code: initialCode,
      createdAt: args.createdAt,
      updatedAt: args.createdAt,
      owner: args.owner,
      syntax: "javascript"
    });
  },

  update(id, args) {
    return Prototypes.update(id, {
      $set: { ...args, updatedAt: Date.now() }
    });
  },

  updateSyntax(id, args) {
    switch (args.syntax) {
      case "coffeescript":
        const csOutput = js2coffee.build(args.code);
        args.code = csOutput.code;
        break;
      case "javascript":
        args.code = CoffeeScript.compile(args.code, { bare: true });
        break;
      default:
        args.code = args.code;
    }

    return Meteor.call("update", id, { ...args });
  },

  deletePrototype(id) {
    return Prototypes.remove(id);
  }
});
