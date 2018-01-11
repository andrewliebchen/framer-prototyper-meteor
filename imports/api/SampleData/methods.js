import { Meteor } from "meteor/meteor";
import faker from "faker";
import _ from "lodash";

import SampleData from "./SampleData";

const initialCode = `{
  firstName: faker.fake('name.firstName'),
  lastName: faker.fake('name.lastName')
}`;

Meteor.methods({
  newSampleData(id) {
    return SampleData.insert({
      createdAt: Date.now(),
      prototype: id,
      count: 0,
      code: initialCode,
      values: []
    });
  },

  updateSampleDataGroup(id, args) {
    return SampleData.update(id, {
      $set: {
        ...args,
        updatedAt: Date.now()
      }
    });
  },

  deleteSampleDataGroup(id) {
    return SampleData.remove(id);
  },

  getSampleDataValues(args) {
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
