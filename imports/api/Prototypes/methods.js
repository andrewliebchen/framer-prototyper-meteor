import {Meteor} from 'meteor/meteor';
import js2coffee from 'js2coffee';
import CoffeeScript from 'coffeescript';

import Prototypes from './Prototypes';
import Strings from '../../lib/strings';

const initialCode = `# Welcome to Framer Science!
# ${Strings.tagline}

layerA = new Layer
  x: Align.center
  y: Align.center
  backgroundColor: new Color('blue').alpha(0.5)`;

Meteor.methods({
  newPrototype(args) {
    return Prototypes.insert({
      code: initialCode,
      createdAt: args.createdAt,
      updatedAt: args.createdAt,
      owner: args.owner,
      syntax: 'coffeescript',
      background: 'light',
    });
  },

  updatePrototype(id, args) {
    return Prototypes.update(id, {
      $set: {...args, updatedAt: Date.now()},
    });
  },

  updateSyntax(id, args) {
    switch (args.syntax) {
      case 'coffeescript':
        const csOutput = js2coffee.build(args.code);
        args.code = csOutput.code;
        break;
      case 'javascript':
        args.code = CoffeeScript.compile(args.code, {bare: true});
        break;
      default:
        args.code = args.code;
    }

    return Meteor.call('updatePrototype', id, {...args});
  },

  deletePrototype(id) {
    return Prototypes.remove(id);
  },

  forkPrototype(id, owner) {
    let original = Prototypes.findOne({_id: id});

    return Prototypes.insert({
      code: original.code,
      createdAt: original.createdAt,
      updatedAt: Date.now(),
      owner: owner,
      syntax: original.syntax,
    });
  },
});
