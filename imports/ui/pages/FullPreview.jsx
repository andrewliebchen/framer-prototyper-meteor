import React from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";

import PageComponents from "../components/PageComponents.jsx";
import Preview from "../components/Preview.jsx";
import Loader from "../components/Loader.jsx";

import { Prototypes } from "../../api/prototypes";

// Nice transition here?
const FullPreview = props => {
  return props.loading ? (
    <Loader />
  ) : (
    <div>
      <PageComponents />
      <Preview prototype={props.prototype} playing full />
    </div>
  );
};

FullPreview.propTypes = {
  prototype: PropTypes.object,
  loading: PropTypes.bool
};

export default withTracker(({ id }) => {
  const prototypeHandle = Meteor.subscribe("prototype", id);
  const loading = !prototypeHandle.ready();

  return {
    loading,
    prototype: loading ? {} : Prototypes.findOne()
  };
})(FullPreview);
