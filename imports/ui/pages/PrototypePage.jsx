import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";

import Prototype from "../components/Prototype.jsx";
import Loader from "../components/Loader.jsx";

import Prototypes from "../../api/Prototypes/Prototypes";

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
  prototypeListLoaded: PropTypes.bool
};

export default withTracker(props => {
  const id = props.match.params.id;
  const prototypeHandle = Meteor.subscribe("prototype", id);
  const loading = !prototypeHandle.ready();

  let prototypeListLoaded = false;

  // Get a list of prototypes. If there's a user, get their Prototypes
  // if this is the Electron client, get all local prototypes
  if (Meteor.userId()) {
    const prototypeListHandle = Meteor.subscribe("prototypes", Meteor.userId());
    prototypeListLoaded = prototypeListHandle.ready();
  }

  if (Meteor.isDesktop) {
    const prototypeListHandle = Meteor.subscribe("allPrototypes");
    prototypeListLoaded = prototypeListHandle.ready();
  }

  return {
    loading,
    prototypeListLoaded,
    prototype: loading ? {} : Prototypes.findOne(id),
    prototypes: prototypeListLoaded
      ? Prototypes.find({}, { sort: { updatedAt: -1 } }).fetch()
      : []
  };
})(PrototypePage);
