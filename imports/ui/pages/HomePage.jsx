import React from "react";
import { Meteor } from "meteor/meteor";
import { PropTypes } from "prop-types";
import { Flex, Box } from "reflexbox";
import { Link } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";

import PageComponents from "../components/PageComponents";
import PrototypesList from "../components/PrototypesList";
import Accounts from "../components/Accounts";

import Strings from "../lib/strings";
import Prototypes from "../../api/Prototypes/Prototypes";

import "../styles/Home.css";

const isLoggedIn = Meteor.userId();

const HomePage = props => (
  <div>
    <PageComponents pageName="Login" />
    <Flex className="Home App">
      <Flex auto className="HomeLeft" align="center">
        <Box>
          <h1>{Strings.appName}</h1>
          <p>{Strings.tagline}</p>
          <Accounts />
        </Box>
      </Flex>
      <Box className="HomeRight Modal">
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
