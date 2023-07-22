import React, { useEffect } from "react";

function Tab1(props) {
  useEffect(() => {
    props.setTabName("Tab 1");
  }, []);

  const loopDivs = () => {
    const divs = [];
    for (let index = 0; index < 8; index++) {
      divs.push(
        <div key={index} className="flex flex-col px-3 py-3 text-white border-b-2 border-white dark:text-white">
          {/* header */}
          <div className="py-2 font-bold">
            <h1>Header {index+1}</h1>
          </div>

          <div className="grid grid-cols-1 py-2 font-bold md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center w-40 h-40 opacity-80 bg-slate-900">
              div 1
            </div>
            <div className="flex flex-col items-center justify-center w-40 h-40 opacity-80 bg-slate-900">
              div 2
            </div>
            <div className="flex flex-col items-center justify-center w-40 h-40 opacity-80 bg-slate-900">
              div 3
            </div>
            <div className="flex flex-col items-center justify-center w-40 h-40 opacity-80 bg-slate-900">
              div 4
            </div>
          </div>
        </div>
      );
    }

    return (divs)
  };
  return (
    <>
      <div className="w-full p-3 rounded-md ">
        <div className="h-[1200px] overflow-y-scroll rounded-md  scrollBar  w-full flex flex-col ">
       
          {/* section 1 */}
          {loopDivs()}
        </div>
      </div>
    </>
  );
}

export default Tab1;
