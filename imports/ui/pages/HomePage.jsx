import React from "react";
import { Meteor } from "meteor/meteor";
import { PropTypes } from "prop-types";
import { Flex, Box } from "reflexbox";
import { Link } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";

import Accounts from "../components/Accounts.jsx";
import PageComponents from "../components/PageComponents";
import PrototypesList from "../components/PrototypesList";

import Strings from "../lib/strings";
import Prototypes from "../../api/Prototypes/Prototypes";

const HomePage = props => (
  <div className="Home">
    <PageComponents pageName="Login" />
    <Flex>
      <Box w={1 / 3} style={{ color: "white", padding: "3em" }}>
        <h1>{Strings.appName}</h1>
        <p>{Strings.tagline}</p>
        {Meteor.isDesktop || <Accounts />}
        <Link to="/new" className="Button" style={{ marginTop: "1em" }}>
          Create a new prototype
        </Link>
      </Box>
      <Box w={2 / 3} style={{ backgroundColor: "white", padding: "3em" }}>
        <PrototypesList {...props} />
      </Box>
    </Flex>
  </div>
);

HomePage.propTypes = {
  prototypes: PropTypes.array,
  prototypesListLoaded: PropTypes.bool
};

export default withTracker(props => {
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
    prototypeListLoaded,
    prototypes: prototypeListLoaded
      ? Prototypes.find({}, { sort: { updatedAt: -1 } }).fetch()
      : []
  };
})(HomePage);
