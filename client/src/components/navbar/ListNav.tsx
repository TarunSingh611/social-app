import React, { useEffect, useState } from "react";

const ListNav = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabSelect = (index: number) => {
    setSelectedTab(index);
  };

  useEffect(() => {
    console.log(selectedTab);
  }, [selectedTab]);

  return (
    <ul className="flex flex-col py-4 my-8">
      <li className={`liNav ${selectedTab === 0 ? "selected" : ""} `}>
        <div className={`tabHN `} onClick={() => handleTabSelect(0)}>
          Profile
        </div>
      </li>
      <li className={`liNav ${selectedTab === 1 ? "selected" : ""}`}>
        <div className={`tabHN `} onClick={() => handleTabSelect(1)}>
          Feed
        </div>
      </li>
      <li className={`liNav ${selectedTab === 2 ? "selected" : ""}`}>
        <div className={`tabHN `} onClick={() => handleTabSelect(2)}>
          Chats
        </div>
      </li>
      <li className={`liNav ${selectedTab === 3 ? "selected" : ""}`}>
        <div className={`tabHN `} onClick={() => handleTabSelect(3)}>
          Explore
        </div>
      </li>
      <li className={`liNav ${selectedTab === 4 ? "selected" : ""}`}>
        <div className={`tabHN `} onClick={() => handleTabSelect(4)}>
          Search
        </div>
      </li>
      <li className={`liNav ${selectedTab === 5 ? "selected" : ""}`}>
        <div className={`tabHN `} onClick={() => handleTabSelect(5)}>
          Setting
        </div>
      </li>
    </ul>
  );
};

export default ListNav;
