import React, {  useRef, useState } from "react";

function SideBar(props) {
  const [settingIconState, setSettingIconState] = useState(false);
  const [settingOptionHeight, setSettingOptionHeight] = useState(0);
  const settingOptionDiv = useRef(null);
  const [chartIconState, setChartIconState] = useState(false);

  let sideBarClassList =
    "flex-col py-5   md:flex gap-y-3 transistion duration-300";
  return (
    <>
      <div
        ref={props.sideBarRef}
        className={`${sideBarClassList} absolute md:static top-0 left-0 bg-slate-900 px-2 md:px-0 md:dark:bg-main-lightMode md:bg-main-blue`}
      >
        <div
          onClick={() => {
            props.setCurrentTabGroup("home");
          }}
          className="flex flex-row items-center px-3 py-2 rounded-md cursor-pointer dark:bg-lightMode-light-darker bg-light-darker bg-opacity-5"
        >
          <div className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 font-bold "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <h4 className="px-4 text-sm font-bold ">Home</h4>
          </div>
        </div>
        <div
          onClick={() => {
            setSettingIconState(!settingIconState);
          }}
          className="bg-light-darker dark:bg-lightMode-light-darker bg-opacity-5"
        >
          <div
            className={
              " cursor-pointer flex flex-row px-3 items-center py-2 rounded-md "
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 font-bold "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>

            <h4 className="px-4 text-sm font-bold ">Options</h4>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={
                settingIconState
                  ? "w-6 h-6 font-bold  transition ease-in-out  -rotate-180"
                  : "w-6 h-6 font-bold  transition ease-in-out"
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          <div
            ref={settingOptionDiv}
            className={
              settingIconState
                ? `max-h-[${settingOptionHeight}px]  transistion duration-700 bg-light-darker bg-opacity-5`
                : "max-h-0  transistion duration-700  overflow-hidden bg-light-darker bg-opacity-5 "
            }
          >
            <div
              onClick={() => {
                props.setCurrentTabGroup("overview");
              }}
              className="py-2 ml-10"
            >
              <h1 className="text-sm ">Overview</h1>
            </div>
            <div
              onClick={() => {
                props.setCurrentTabGroup("customer_list");
              }}
              className="py-2 ml-10"
            >
              <h1 className="text-sm ">Customer List</h1>
            </div>
            <div
              onClick={() => {
                props.setCurrentTabGroup("settings");
              }}
              className="py-2 ml-10"
            >
              <h1 className="text-sm ">Settings</h1>
            </div>
            <div className="py-2 ml-10">
              <h1 className="text-sm e">Privacy</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center px-3 py-2 rounded-md cursor-pointer dark:bg-lightMode-light-darker bg-light-darker bg-opacity-5">
          <div className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 font-bold "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </svg>

            <h4 className="px-4 text-sm font-bold ">Elements</h4>
          </div>
        </div>

        <div
          onClick={() => {
            setChartIconState(!chartIconState);
          }}
          className="bg-light-darker bg-opacity-5 dark:bg-lightMode-light-darker"
        >
          <div
            className={
              " cursor-pointer flex flex-row px-3 items-center py-2 rounded-md "
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 font-bold "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>

            <h4 className="px-4 text-sm font-bold">Charts</h4>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={
                chartIconState
                  ? "w-6 h-6 font-bold  transition ease-in-out  -rotate-180"
                  : "w-6 h-6 font-bold transition ease-in-out"
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          <div
            className={
              chartIconState
                ? `max-h-[${settingOptionHeight}]  ease-in-out transistion duration-300 bg-light-darker bg-opacity-5`
                : "max-h-0  transistion duration-700  overflow-hidden bg-light-darker bg-opacity-5 "
            }
          >
            <div className="flex flex-col">
              <div className="py-2 ml-10">
                <h1 className="text-sm ">Bar Charts</h1>
              </div>
              <div className="py-2 ml-10">
                <h1 className="text-sm ">Pie Charts</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
