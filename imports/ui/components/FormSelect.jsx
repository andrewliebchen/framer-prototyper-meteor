import React from "react";
import PropTypes from "prop-types";

import FormLabel from "./FormLabel.jsx";

const FormSelect = props => (
  <div className="Form">
    {props.label && <FormLabel>{props.label}</FormLabel>}
    {props.hint && <p>{props.hint}</p>}
    <select
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      disabled={props.disabled}
    >
      {props.options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

FormSelect.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  )
};

export default FormSelect;
