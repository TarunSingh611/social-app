"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabbedNav = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabSelect = (index: number) => {
    setSelectedTab(index);
  };
  return (
    <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </TabList>
    </Tabs>
  );
};

export default TabbedNav;
