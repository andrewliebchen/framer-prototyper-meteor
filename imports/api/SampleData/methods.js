import {Meteor} from 'meteor/meteor';
import sample from 'faker';
import _ from 'lodash';

import SampleData from './SampleData';

const initialCode = `{
  firstName: sample.name.firstName(),
  lastName: sample.name.lastName()
}`;

Meteor.methods({
  newSampleData(prototypeId) {
    return SampleData.insert({
      createdAt: Date.now(),
      prototype: prototypeId,
      count: 0,
      code: initialCode,
      values: [],
    });
  },

  updateSampleDataGroup(id, args) {
    return SampleData.update(id, {
      $set: {
        ...args,
        updatedAt: Date.now(),
      },
    });
  },

  deleteSampleDataGroup(id) {
    return SampleData.remove(id);
  },

  refreshSampleData(sampleData) {
    let data = [];

    _.times(sampleData.count, () => {
      data.push(eval(`${sampleData.name} = ${sampleData.code}`));
    });

    console.log(data);
    return Meteor.call('updateSampleDataGroup', sampleData._id, {
      values: data,
    });
  },
});
