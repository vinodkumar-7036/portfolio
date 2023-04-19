import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CardComponent from "./CardComponent";
import PrivacyComponent from "./PrivacyComponent";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Info" value="1" />
            <Tab label="FaQ" value="2" />
            <Tab label="Complaints And Feedback" value="3" />
            <Tab label="Privacy Policy" value="4" />
            <Tab label="Terms And Conditions" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <CardComponent />
        </TabPanel>
        <TabPanel value="2">Adress Loading</TabPanel>
        <TabPanel value="3">Data Getting</TabPanel>
        <TabPanel value="4">
          <PrivacyComponent />
        </TabPanel>
        <TabPanel value="5">Conditions</TabPanel>
      </TabContext>
    </Box>
  );
}
