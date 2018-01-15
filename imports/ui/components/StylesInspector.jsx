import React from "react";
import PropTypes from "prop-types";

import Button from "./Button.jsx";
import CodeElement from "./CodeElement.jsx";

const StylesInspector = props => (
  <div className="ModalSection">
    <h3>Styles</h3>
    <p>
      Reprehenderit adipisicing dolor do non exercitation adipisicing laboris
      amet adipisicing dolore.
    </p>
    <CodeElement />
    <Button block label="Add new style" />
  </div>
);

StylesInspector.propTypes = {};

export default StylesInspector;

// collection: PropTypes.object,
// defaultNameValue: PropTypes.string,
// handleNameUpdate: PropTypes.func,
// count: PropTypes.number,
// handleCountUpdate: PropTypes.func,
// code: PropTypes.string,
// handleCodeUpdate: PropTypes.func,
// handleDelete: PropTypes.func,
// disabled: PropTypes.bool,
// handleRefresh: PropTypes.func
