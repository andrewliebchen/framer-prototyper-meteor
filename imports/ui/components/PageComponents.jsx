import React from "react";
import { Helmet } from "react-helmet";
import ReactTooltip from "react-tooltip";
import { ToastContainer, style } from "react-toastify";
import { css } from "glamor";

const toastStyle = {
  fontFamily: "-apple-system, BlinkMacSystemFont, san-serif",
  fontSize: 16,
  backgrounColor: "#f0f0f0",
  color: "#111",
  padding: "1.5em 2em"
};

const toastProgressStyle = {
  background: "#0074d9"
};

const PageComponents = props => (
  <div>
    <Helmet>
      <title>Framer Prototyper</title>
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

export default PageComponents;
