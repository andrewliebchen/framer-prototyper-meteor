import React from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";

import Preview from "../components/Preview.jsx";

import Prototypes from "../../api/Prototypes/Prototypes";

const PreviewPage = props => <Preview full playing {...props} />;

PreviewPage.propTypes = {
  prototype: PropTypes.object,
  loading: PropTypes.bool
};

export default withTracker(({ id }) => {
  const prototypeHandle = Meteor.subscribe("prototype", id);
  const loading = !prototypeHandle.ready();

  return {
    loading,
    prototype: loading ? {} : Prototypes.findOne(id)
  };
})(PreviewPage);
