import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const Toast = props => (
  <span>
    {console.log(props)}
    {toast(props.message[props.messages[props.type]], { type: props.type })}
  </span>
);

Toast.propTypes = {
  type: PropTypes.oneOf(["error", "success"]),
  messages: PropTypes.shape({
    success: PropTypes.string,
    error: PropTypes.error
  })
};

export default Toast;
