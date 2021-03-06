import React from 'react';
import {Meteor} from 'meteor/meteor';
import PropTypes from 'prop-types';
import {withTracker} from 'meteor/react-meteor-data';

import Prototype from '../components/Prototype';
import Loader from '../components/Loader';

import Prototypes from '../../api/Prototypes/Prototypes';
import SampleData from '../../api/SampleData/SampleData';
import Styles from '../../api/Styles/Styles';

const PrototypePage = props => {
  if (props.loading) {
    return <Loader />;
  } else {
    return <Prototype {...props} />;
  }
};

PrototypePage.propTypes = {
  prototype: PropTypes.object,
  prototypes: PropTypes.array,
  loading: PropTypes.bool,
  prototypeListLoading: PropTypes.bool,
  sampleDataLoading: PropTypes.bool,
  sampleData: PropTypes.array,
  stylesLoading: PropTypes.bool,
  styles: PropTypes.array,
};

export default withTracker(props => {
  const id = props.match.params.id;

  const prototypeHandle = Meteor.subscribe('prototype', id);
  const loading = !prototypeHandle.ready();

  const sampleDataHandle = Meteor.subscribe('sampleData', id);
  const sampleDataLoading = !sampleDataHandle.ready();

  const stylesHandle = Meteor.subscribe('styles', id);
  const stylesLoading = !stylesHandle.ready();

  // Get a list of prototypes. If there's a user, get their Prototypes
  let prototypeListLoading = true;

  if (Meteor.userId()) {
    const prototypeListHandle = Meteor.subscribe('prototypes', Meteor.userId());
    prototypeListLoading = !prototypeListHandle.ready();
  }

  return {
    loading,
    prototypeListLoading,
    sampleDataLoading,
    stylesLoading,
    prototype: loading ? {} : Prototypes.findOne(id),
    prototypes: prototypeListLoading
      ? []
      : Prototypes.find({}, {sort: {updatedAt: -1}}).fetch(),
    sampleData: sampleDataLoading
      ? []
      : SampleData.find({prototype: id}).fetch(),
    styles: stylesLoading ? [] : Styles.find({prototype: id}).fetch(),
  };
})(PrototypePage);
