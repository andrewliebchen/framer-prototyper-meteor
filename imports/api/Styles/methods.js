import { Meteor } from "meteor/meteor";

import Styles from "./Styles";

const initialCode = `size: 200
backgroundColor: new Color(blue).alpha(0.5)`;

Meteor.methods({
  newStyle(id) {
    return Styles.insert({
      createdAt: Date.now(),
      prototype: id,
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
  }
});
