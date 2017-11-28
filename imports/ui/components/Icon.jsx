import React from "react";
import PropTypes from "prop-types";

const renderIcon = name => {
  switch (name) {
    case "account":
      return "💁";
    case "baby":
      return "👶";
    case "cog":
      return "⚙️";
    case "copy":
      return "👯";
    case "edit":
      return "✏️";
    case "eye":
      return "👁";
    case "fileCabinet":
      return "🗄";
    case "pause":
      return "✋";
    case "play":
      return "🏃";
    default:
      return "";
  }
};

const Icon = props => (
  <div
    className="Icon"
    style={{
      fontSize: props.size,
      lineHeight: 1,
      position: "relative",
      top: 3
    }}
    {...props}
  >
    {renderIcon(props.name)}
  </div>
);

Icon.defaultProps = {
  size: 30
};

Icon.propTypes = {
  name: PropTypes.oneOf([
    "account",
    "baby",
    "cog",
    "copy",
    "edit",
    "eye",
    "fileCabinet",
    "pause",
    "play"
  ]),
  size: PropTypes.number,
  onClick: PropTypes.func
};

export default Icon;
