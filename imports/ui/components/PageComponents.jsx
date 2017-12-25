import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import ReactTooltip from "react-tooltip";
import { ToastContainer, style } from "react-toastify";
import { css } from "glamor";

const toastStyle = {
  fontFamily: "-apple-system, BlinkMacSystemFont, san-serif",
  fontSize: 16,
  backgroundColor: "rgba(0, 116, 217, 0.7)",
  color: "white",
  fontWeight: "500",
  letterSpacing: "0.02em",
  padding: "1.5em 2em",
  textTransform: "uppercase"
};

const toastProgressStyle = {
  background: "rgba(0, 0, 0, 0.4)"
};

const PageComponents = props => (
  <div>
    <Helmet>
      <title>Framer Science | {props.prototypeName}</title>
    </Helmet>
    <ReactTooltip place="bottom" offset={{ bottom: 10 }} className="Tooltip" />
    <ToastContainer
      position="bottom-left"
      closeButton={false}
      toastClassName={css(toastStyle)}
      progressClassName={css(toastProgressStyle)}
    />
  </div>
);

PageComponents.PropTypes = {
  prototypeName: PropTypes.string
};

export default PageComponents;
