import {Meteor} from 'meteor/meteor';
import Prototypes from '../Prototypes';

Meteor.publish('prototype', id => {
  return Prototypes.find({_id: id});
});

Meteor.publish('prototypes', userId => {
  return Prototypes.find({owner: userId});
});

Meteor.publish('allPrototypes', () => {
  return Prototypes.find({});
});
