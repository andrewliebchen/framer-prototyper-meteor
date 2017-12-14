import React from "react";
import { Meteor } from "meteor/meteor";
import AccountsUIWrapper from "../components/AccountsUIWrapper.jsx";
import { Redirect } from "react-router-dom";

// FIXME: Where do we redirect to if you're logged in?
const LoginPage = () => {
  if (Meteor.userId()) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="Login">
        <AccountsUIWrapper />
      </div>
    );
  }
};

export default LoginPage;
