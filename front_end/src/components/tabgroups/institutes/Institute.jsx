import React, { useEffect, useRef, useState } from "react";
// import { HMREventHandler } from './HotModuleReloadSetup.js';
import Tab1 from "./tabs/Tab1";
import Tab2 from "./tabs/Tab2";
import Tab3 from "./tabs/Tab3";
import Tab4 from "./tabs/Tab4";
import Tab5 from "./tabs/Tab5";
function Institutes() {
  const tabName = "Institute";
  const [currentTab, setCurrentTab] = useState("tab1");

  const Tabs = {
    tab1: Tab1,
    tab2: Tab2,
    tab3: Tab3,
    tab4: Tab4,
    tab5: Tab5,
  };
  let SelectedTab = Tabs[currentTab];


  useEffect(() => {
    if (currentTab === "") {
      setCurrentTab("tab1");
    } else {
      // setBorderBottomToCurrentTab();
    }
    console.log("selected tab is ", SelectedTab);
  }, [currentTab]);


  return (
    <>
      <div className="">
        <div className="text-2xl font-semibold">{tabName}</div>
        {/* tab header  */}
        <div className="flex flex-row items-center pt-5 overflow-hidden border-b-2 gap-x-3 border-b-slate-500 dark:border-black">
        <h1
            onClick={() => {
              setCurrentTab("tab1");
            }}
            className={`pb-2 text-sm cursor-pointer     ${
              currentTab === "tab1" ? "border-b-4 dark:border-black" : ""
            }`}
          >
            Common Insitutes
          </h1>
          <h1
            onClick={() => {
              setCurrentTab("tab2");
            }}
            className={`pb-2 text-sm cursor-pointer ${
              currentTab === "tab2" ? "border-b-4 dark:border-black" : ""
            }`}
          >
            Tab 2
          </h1>
          <h1
            onClick={() => {
              setCurrentTab("tab3");
            }}
            className={`pb-2 text-sm cursor-pointer ${
              currentTab === "tab3" ? "border-b-4 dark:border-black" : ""
            }`}
          >
            Tab 3
          </h1>
          <h1
            onClick={() => {
              setCurrentTab("tab4");
            }}
            className={`pb-2 text-sm cursor-pointer ${
              currentTab === "tab4" ? "border-b-4 dark:border-black" : ""
            }`}
          >
            Tab 4
          </h1>
          <h1
            onClick={() => {
              setCurrentTab("tab5");
            }}
            className={`pb-2 text-sm cursor-pointer ${
              currentTab === "tab5" ? "border-b-4 dark:border-black" : ""
            }`}
          >
            Tab 5
          </h1>
        
        </div>
        {/* tab body */}
        <div className="flex flex-col items-center py-2">
  
          <SelectedTab  />
        </div>
      </div>
    </>
  );
}

export default Institutes;
