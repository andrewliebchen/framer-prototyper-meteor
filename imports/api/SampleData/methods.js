import { Meteor } from "meteor/meteor";
import { Random } from "meteor/random";
import faker from "faker";
import _ from "lodash";

import SampleData from "./SampleData";

Meteor.methods({
  newSampleData(id) {
    return SampleData.insert({
      createdAt: Date.now(),
      prototype: id,
      fields: [],
      count: 0
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

  deteteSampleDataGroup(id) {
    return SampleData.remove(id);
  },

  newSampleDataField(id) {
    return SampleData.update(id, {
      $push: {
        fields: {
          id: Random.id(),
          name: "name"
        }
      }
    });
  },

  updateSampleDataField(id, args) {
    return SampleData.update(
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
