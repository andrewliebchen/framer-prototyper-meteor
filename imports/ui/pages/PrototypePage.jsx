import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";

import Prototype from "../components/Prototype.jsx";
import Loader from "../components/Loader.jsx";

import Prototypes from "../../api/Prototypes/Prototypes";
import Data from "../../api/Data/Data";

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
  dataLoading: PropTypes.bool
};

export default withTracker(props => {
  const id = props.match.params.id;
  const prototypeHandle = Meteor.subscribe("prototype", id);
  const loading = !prototypeHandle.ready();

  const dataHandle = Meteor.subscribe("data", id);
  const dataLoading = !dataHandle.ready();

  let prototypeListLoading = true;

  // Get a list of prototypes. If there's a user, get their Prototypes
  // if this is the Electron client, get all local prototypes
  if (Meteor.userId()) {
    const prototypeListHandle = Meteor.subscribe("prototypes", Meteor.userId());
    prototypeListLoading = !prototypeListHandle.ready();
  }

  if (Meteor.isDesktop) {
    const prototypeListHandle = Meteor.subscribe("allPrototypes");
    prototypeListLoading = !prototypeListHandle.ready();
  }

  return {
    loading,
    dataLoading,
    prototypeListLoading,
    prototype: loading ? {} : Prototypes.findOne(id),
    prototypes: prototypeListLoading
      ? []
      : Prototypes.find({}, { sort: { updatedAt: -1 } }).fetch(),
    data: dataLoading ? [] : Data.find({ prototype: id }).fetch()
  };
})(PrototypePage);
