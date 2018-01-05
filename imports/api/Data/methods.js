import { Meteor } from "meteor/meteor";
import { Random } from "meteor/random";
import faker from "faker";
import _ from "lodash";

import Data from "./Data";

// console.log(faker.fake("{{name.firstName}} {{name.lastName}} {{name.suffix}}"));

// const getData = new Promise((resolve, reject) => {
//   Meteor.call(
//     "getValues",
//     { fields: ["lastName", "firstName"], count: 5 },
//     (err, data) => {
//       resolve(data);
//     }
//   );
// });
//
// getData.then(data => console.log(data));

Meteor.methods({
  newData(id) {
    return Data.insert({
      createdAt: Date.now(),
      prototype: id,
      fields: [],
      value: [],
      count: 0
    });
  },

  updateData(id, args) {
    return Data.update(id, {
      $set: {
        ...args,
        updatedAt: Date.now()
      }
    });
  },

  deteteDataGroup(id) {
    return Data.remove(id);
  },

  newField(id) {
    return Data.update(id, {
      $push: {
        fields: {
          id: Random.id(),
          name: "name"
        }
      }
    });
  },

  updateField(id, args) {
    return Data.update(
      { _id: id, "fields.id": args.id },
      {
        $set: {
          "fields.$": {
            ...args
          }
        }
      }
    );
  },

  getValues(args) {
    let values = [];
    let count = args.count || 1;

    _.times(count, () => {
      let element = {};

      args.fields.map(field => {
        let name = field.name;

        element[name] = faker.fake(`{{${name}}}`);
      });

      values.push(element);
    });

    return values;
  }
});
