import React from "react";
import PropTypes from "prop-types";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import Snippets from "./Snippets.jsx";
import SampleDataInspector from "./SampleDataInspector.jsx";

const Utilities = props => (
  <Tabs>
    <TabList>
      <Tab>Snippets</Tab>
      <Tab>Data</Tab>
    </TabList>
    <TabPanel>
      <Snippets {...props} />
    </TabPanel>
    <TabPanel>
      <SampleDataInspector {...props} />
    </TabPanel>
  </Tabs>
);

Utilities.propTypes = {
  prototype: PropTypes.object,
  data: PropTypes.array,
  sampleData: PropTypes.array,
  prototypeSampleData: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  toggleSampleData: PropTypes.func
};

export default Utilities;
