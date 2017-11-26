import React from "react";
import Loading from "react-loading-animation";

const Loader = () => (
  <Loading
    width="80px"
    height="80px"
    strokeWidth="3"
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate3d(-50%, -50%, 0)"
    }}
  />
);

export default Loader;
