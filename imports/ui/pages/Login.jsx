import React from "react";
import { Meteor } from "meteor/meteor";
import Accounts from "../components/Accounts.jsx";
import { Redirect } from "react-router-dom";

// FIXME: Where do we redirect to if you're logged in?
const LoginPage = () => {
  if (Meteor.userId()) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="Centered">
        <Accounts />
      </div>
    );
  }
};

export default LoginPage;
