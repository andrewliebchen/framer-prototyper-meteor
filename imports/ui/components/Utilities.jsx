import React from "react";
import PropTypes from "prop-types";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import Snippets from "./Snippets.jsx";
import SampleDataInspector from "./SampleDataInspector.jsx";

const Utilities = props => (
  <Tabs>
    <TabList>
      <Tab>Data</Tab>
      <Tab>Styles</Tab>
      <Tab>Snippets</Tab>
    </TabList>
    <TabPanel>
      <SampleDataInspector {...props} />
    </TabPanel>
    <TabPanel>
      <div>Styles</div>
    </TabPanel>
    <TabPanel>
      <Snippets {...props} />
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
