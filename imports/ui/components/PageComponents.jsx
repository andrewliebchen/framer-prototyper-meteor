import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import ReactTooltip from "react-tooltip";
import { ToastContainer, style } from "react-toastify";
import { css } from "glamor";

import Strings from "../lib/strings";

style({
  colorDefault: "rgba(0, 116, 217, 0.7)",
  colorError: "rgba(255, 65, 54, 0.7)",
  colorProgressDefault: "rgba(0, 0, 0, 0.4)",
  colorProgressError: "rgba(0, 0, 0, 0.4)"
});

const PageComponents = props => (
  <div>
    <Helmet>
      {Meteor.isDesktop ? (
        <title>{Strings.appName}</title>
      ) : (
        <title>
          {Strings.appName} | {props.pageName}
        </title>
      )}
    </Helmet>
    <ReactTooltip place="bottom" offset={{ bottom: 10 }} className="Tooltip" />
    <ToastContainer
      position="bottom-left"
      closeButton={false}
      toastClassName={css({
        fontFamily: "-apple-system, BlinkMacSystemFont, san-serif",
        fontSize: 16,
        color: "white",
        fontWeight: "500",
        letterSpacing: "0.02em",
        padding: "1.5em 2em",
        textTransform: "uppercase"
      })}
    />
  </div>
);

PageComponents.PropTypes = {
  pageName: PropTypes.string.isRequired
};

export default PageComponents;
