import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";

import Prototype from "../components/Prototype.jsx";
import Loader from "../components/Loader.jsx";

import Prototypes from "../../api/Prototypes/Prototypes";
import SampleData from "../../api/SampleData/SampleData";

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
  sampleData: PropTypes.array
};

export default withTracker(props => {
  const id = props.match.params.id;

  const prototypeHandle = Meteor.subscribe("prototype", id);
  const loading = !prototypeHandle.ready();

  const sampleDataHandle = Meteor.subscribe("sampleData", id);
  const sampleDataLoading = !sampleDataHandle.ready();

  // Get a list of prototypes. If there's a user, get their Prototypes
  let prototypeListLoading = true;

  if (Meteor.userId()) {
    const prototypeListHandle = Meteor.subscribe("prototypes", Meteor.userId());
    prototypeListLoading = !prototypeListHandle.ready();
  }

  return {
    loading,
    sampleDataLoading,
    prototypeListLoading,
    prototype: loading ? {} : Prototypes.findOne(id),
    prototypes: prototypeListLoading
      ? []
      : Prototypes.find({}, { sort: { updatedAt: -1 } }).fetch(),
    sampleData: sampleDataLoading
      ? []
      : SampleData.find({ prototype: id }).fetch()
  };
})(PrototypePage);
