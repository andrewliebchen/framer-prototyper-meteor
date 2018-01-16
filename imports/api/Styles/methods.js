import { Meteor } from "meteor/meteor";

import Styles from "./Styles";

const initialCode = `{
  backgroundColor: new Color('blue').alpha(0.5)
  borderRadius: 5
}`;

Meteor.methods({
  newStyle(prototypeId) {
    return Styles.insert({
      createdAt: Date.now(),
      prototype: prototypeId,
      code: initialCode
    });
  },

  updateStyle(id, args) {
    return Styles.update(id, {
      $set: {
        ...args,
        updatedAt: Date.now()
      }
    });
  },

  deleteStyle(id) {
    return SampleData.remove(id);
  }
});
