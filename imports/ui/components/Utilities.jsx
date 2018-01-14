import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import PropTypes from "prop-types";

import SampleDataInspector from "./SampleDataInspector.jsx";
import Snippets from "./Snippets.jsx";
import StylesInspector from "./StylesInspector.jsx";

const Utilities = props => (
  <Tabs>
    <TabList>
      <Tab>Styles</Tab>
      <Tab>Data</Tab>
      <Tab>Snippets</Tab>
    </TabList>

    <TabPanel>
      <StylesInspector {...props} />
    </TabPanel>
    <TabPanel>
      <SampleDataInspector {...props} />
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
