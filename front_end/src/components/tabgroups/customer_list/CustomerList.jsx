import React, { useEffect, useRef, useState } from "react";


function CustomerList() {
  const [currentTab, setCurrentTab] = useState(null);
  const tabRef1 = useRef(null);
  const tabRef2 = useRef(null);
  const tabRef3 = useRef(null);
  const tabRef4 = useRef(null);
  const tabRef5 = useRef(null);

  const setBorderBottomToCurrentTab = () => {
    if (currentTab) {
      currentTab.current.classList.add("border-b-4");
    }
  };

  useEffect(() => {
    if (currentTab === null) {
      setCurrentTab(tabRef1);
    } else {
      setBorderBottomToCurrentTab();
    }
  }, [currentTab]);

  const handleTabClick = (tabRef) => {
    if (currentTab && currentTab.current) {
      currentTab.current.classList.remove("border-b-4");
    }
    setCurrentTab(tabRef);
  };

  return (
    <>
      <div>
      <div className="text-2xl font-semibold">Customer List</div>
        {/* tab header  */}
        <div className="flex flex-row items-center pt-5 overflow-hidden border-b-2 gap-x-3 border-b-slate-500 dark:border-black">
          <h1
            ref={tabRef1}
            onClick={() => handleTabClick(tabRef1)}
            className={`pb-2 text-sm cursor-pointer     ${
              currentTab === tabRef1 ? "border-b-4 dark:border-black" : ""
            }`}
          >
            Tab 1
          </h1>
          <h1
            ref={tabRef2}
            onClick={() => handleTabClick(tabRef2)}
            className={`pb-2 text-sm cursor-pointer ${
              currentTab === tabRef2 ? "border-b-4 dark:border-black" : ""
            }`}
          >
            Tab 2
          </h1>
          <h1
            ref={tabRef3}
            onClick={() => handleTabClick(tabRef3)}
            className={`pb-2 text-sm cursor-pointer ${
              currentTab === tabRef3 ? "border-b-4 dark:border-black" : ""
            }`}
          >
            Tab 3
          </h1>
          <h1
            ref={tabRef4}
            onClick={() => handleTabClick(tabRef4)}
            className={`pb-2 text-sm cursor-pointer ${
              currentTab === tabRef4 ? "border-b-4 dark:border-black" : ""
            }`}
          >
            Tab 4
          </h1>
          <h1
            ref={tabRef5}
            onClick={() => handleTabClick(tabRef5)}
            className={`pb-2 text-sm cursor-pointer ${
              currentTab === tabRef5 ? "border-b-4 dark:border-black" : ""
            }`}
          >
            Tab 5
          </h1>
        </div>
        {/* tab body */}
        <div className="flex flex-col items-center py-2">
          {/* {currentTab === tabRef1 ? <Tab1 /> : ""}
          {currentTab === tabRef2 ? <Tab2 /> : ""}
          {currentTab === tabRef3 ? <Tab3 /> : ""}
          {currentTab === tabRef4 ? <Tab4 /> : ""}

          {currentTab === tabRef5 ? <Tab5 /> : ""} */}
        </div>
      </div>
    </>
  );
}

export default CustomerList;
