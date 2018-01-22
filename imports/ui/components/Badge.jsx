import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const size = "2.25em";
const Element = styled.div`
  width: ${size};
  height: ${size};
  letter-spacing: var(--letter-spacing);
  background-color: var(--color-accent);
  color: white;
  font-weight: bold;
  font-size: 0.75em;
  border-radius: ${size};
  text-align: center;
  display: inline-block;
  line-height: ${size};
  text-transform: uppercase;
`;

const Badge = props => <Element className="Badge">{props.label}</Element>;

Badge.propTypes = {
  label: PropTypes.string
};

export default Badge;
