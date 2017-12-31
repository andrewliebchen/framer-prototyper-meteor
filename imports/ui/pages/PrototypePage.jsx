import React from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";

import Prototype from "../components/Prototype.jsx";

import Prototypes from "../../api/Prototypes/Prototypes";

const PrototypePage = props => <Prototype {...props} />;

PrototypePage.propTypes = {
  prototype: PropTypes.object,
  prototypes: PropTypes.array,
  loading: PropTypes.bool,
  prototypeListLoaded: PropTypes.bool
};

export default withTracker(({ id }) => {
  const prototypeHandle = Meteor.subscribe("prototype", id);
  const loading = !prototypeHandle.ready();

  let prototypeListLoaded = false;

  if (Meteor.userId()) {
    const prototypeListHandle = Meteor.subscribe("prototypes", Meteor.userId());
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
