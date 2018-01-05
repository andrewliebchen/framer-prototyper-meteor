import React from "react";
import PropTypes from "prop-types";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import Snippets from "./Snippets.jsx";
import DataInspector from "./DataInspector.jsx";

const Utilities = props => (
  <Tabs>
    <TabList>
      <Tab>Data</Tab>
      <Tab>Snippets</Tab>
    </TabList>
    <TabPanel>
      <DataInspector {...props} />
    </TabPanel>
    <TabPanel>
      <Snippets {...props} />
    </TabPanel>
  </Tabs>
);

Utilities.propTypes = {
  prototype: PropTypes.object,
  data: PropTypes.array,
  dataSample: PropTypes.array
};

export default Utilities;
