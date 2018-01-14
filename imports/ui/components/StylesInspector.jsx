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
