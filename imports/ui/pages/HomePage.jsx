import React from "react";
import { Link } from "react-router-dom";

import Accounts from "../components/Accounts.jsx";
import PageComponents from "../components/PageComponents";

import Strings from "../lib/strings";

const HomePage = () => (
  <div className="Centered" style={{ maxWidth: "30em" }}>
    <PageComponents pageName="Login" />
    <h1>{Strings.appName}</h1>
    <p>{Strings.tagline}</p>
    <Accounts />
    <Link to="/new" className="Button" style={{ marginTop: "1em" }}>
      Create a new prototype
    </Link>
  </div>
);

export default HomePage;
