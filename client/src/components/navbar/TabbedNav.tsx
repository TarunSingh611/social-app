"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabbedNav = ({ tabs }: any) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabSelect = (index: number) => {
    setSelectedTab(index);
  };
  return (
    <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
      <TabList className="flex justify-between m-6">
        {tabs.map((tab: any, index: number) => (
          <Tab
            key={index}
            className={
              `flex-grow text-center cursor-pointer py-2 px-4 transition-colors duration-150 ` +
              (selectedTab === index
                ? "!bg-custom-gradient !text-white" // Selected tab color
                : "bg-gray-200 hover:bg-gray-300") // Non-selected tab color
            }
          >
            {tab.name}
          </Tab>
        ))}
      </TabList>

      {tabs.map((tab: any, index: number) => (
        <TabPanel key={index}>{tab.content}</TabPanel>
      ))}
    </Tabs>
  );
};

export default TabbedNav;
