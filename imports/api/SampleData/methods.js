import { Meteor } from "meteor/meteor";
import faker from "faker";
import _ from "lodash";

import SampleData from "./SampleData";

const initialCode = `{
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName()
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

  refreshSampleData(sampleData) {
    const getData = new Promise((resolve, reject) => {
      resolve(eval(`${sampleData.name} = ${sampleData.code}`));
    });

    getData.then(response => console.log(response));
  }

  // getSampleDataValues(args) {
  //   let values = [];
  //   let count = args.count || 1;
  //
  //   _.times(count, () => {
  //     let element = {};
  //
  //     args.fields.map(field => {
  //       let name = field.name;
  //
  //       element[name] = faker.fake(`{{${name}}}`);
  //     });
  //
  //     values.push(element);
  //   });
  //
  //   return values;
  // }
});
