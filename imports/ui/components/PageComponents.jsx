import React from "react";
import { Helmet } from "react-helmet";
import ReactTooltip from "react-tooltip";

const PageComponents = props => (
  <div>
    <Helmet>
      <title>Framer Prototyper</title>
    </Helmet>
    <ReactTooltip place="bottom" offset={{ bottom: 10 }} className="Tooltip" />
  </div>
);

export default PageComponents;
