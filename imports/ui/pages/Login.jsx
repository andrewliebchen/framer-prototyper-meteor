import React from "react";

import Accounts from "../components/Accounts.jsx";
import PageComponents from "../components/PageComponents";

import Strings from "../lib/strings";

const LoginPage = () => (
  <div className="Centered" style={{ maxWidth: "30em" }}>
    <PageComponents pageName="Login" />
    <h1>{Strings.appName}</h1>
    <p>{Strings.tagline}</p>
    <Accounts />
  </div>
);

export default LoginPage;
