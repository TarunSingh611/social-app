import React, { useEffect, useState } from "react";

const ListNav = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelect = (index: number) => {
    setSelectedTab(index);
  };

  useEffect(() => {
    console.log(selectedTab);
  }, [selectedTab]);

  return (
    <ul className="flex flex-col py-4 ">
      <li className={`liNav ${selectedTab === 0 ? "selected" : ""} `}>
        <div className={`tabHN `} onClick={() => handleTabSelect(0)}>
          Tab 1
        </div>
      </li>
      <li className={`liNav ${selectedTab === 1 ? "selected" : ""}`}>
        <div className={`tabHN `} onClick={() => handleTabSelect(1)}>
          Tab 2
        </div>
      </li>
      <li className={`liNav ${selectedTab === 2 ? "selected" : ""}`}>
        <div className={`tabHN `} onClick={() => handleTabSelect(2)}>
          Tab 3
        </div>
      </li>
    </ul>
  );
};

export default ListNav;
