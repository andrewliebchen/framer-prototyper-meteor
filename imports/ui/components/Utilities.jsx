import React from "react";
import PropTypes from "prop-types";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import Snippets from "./Snippets.jsx";
import DataInspector from "./DataInspector.jsx";

const Utilities = props => (
  <Tabs>
    <TabList>
      {/* <Tab>Snippets</Tab> */}
      <Tab>Data</Tab>
    </TabList>
    {/* <TabPanel>
        <Snippetsd {...props}/>
      </TabPanel> */}
    <TabPanel>
      <DataInspector />
    </TabPanel>
  </Tabs>
);

Utilities.propTypes = {
  prototype: PropTypes.object
};

export default Utilities;
