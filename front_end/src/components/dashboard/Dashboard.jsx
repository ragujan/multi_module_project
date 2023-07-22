import React, { useEffect, useRef, useState } from "react";
import SideBar from "./SideBar";
import Home from "../tabgroups/home/Home";
import Overview from "../tabgroups/overview/Overview";
import Settings from "../tabgroups/settings/Settings";
import CustomerList from "../tabgroups/customer_list/CustomerList";
import logo_image from "../resources/business_logo.png";
import user_image from "../resources/cat_in_a_cup.jpg";

function Dashboard() {
  const [sideBarState, setSideBarState] = useState(false);
  const sideBarRef = useRef(null);
  const smSize = 768;
  const [smallScreenState, setSmallScreenState] = useState(false);
  const [searchBarIsVisible, setSearchBarIsVisible] = useState(false);

  const bodySectionRef = useRef(null);

  const storedTheme = localStorage.getItem("color-theme");
  const [normalMode, setNormalMode] = useState(storedTheme == "normal");

  const searchBarRef = useRef(null);

  const [currentTabGroup, setCurrentTabGroup] = useState("home");

  const TabGroup = {
    home: Home,
    overview: Overview,
    customer_list:CustomerList,
    settings:Settings,
  };

  let SelectedTabGroup = TabGroup[currentTabGroup];
  const sideBarIconsOnly = (sideBar) => {
    const childDivs = sideBar.childNodes;

    childDivs.forEach((element) => {
      let subDivs = element.childNodes;
      subDivs.forEach((subDiv) => {
        let singleSubDiv = subDiv.childNodes;

        let isFirstSvg = true;
        singleSubDiv.forEach((subElement) => {
          if (subElement.nodeName === "svg" && isFirstSvg) {
            isFirstSvg = false;
            return;
          }

          if (sideBarState && window.innerWidth > smSize) {
            subElement.style.display = "none";
          } else if (sideBarState && window.innerWidth <= smSize) {
            sideBarRef.current.style.display = "";
            subElement.style.display = "";
          } else if (!sideBarState && window.innerWidth > smSize) {
            subElement.style.display = "";
            sideBarRef.current.style.display = "";
          } else if (!sideBarState && window.innerWidth <= smSize) {
            sideBarRef.current.style.display = "none";
            subElement.style.display = "";
          } else {
            console.log("else statement ");
          }
        });
      });
    });
  };

  // dark mode light mode option
  useEffect(() => {
    // dark mode is white theme in our case
    if (localStorage.getItem("color-theme")) {
      if (normalMode && localStorage.getItem("color-theme") === "light") {
        localStorage.setItem("color-theme", "normal");
      }

      if (!normalMode && localStorage.getItem("color-theme") === "normal") {
        localStorage.setItem("color-theme", "light");
      }

      console.log(
        "normal mode is ",
        normalMode,
        " storage is ",
        localStorage.getItem("color-theme")
      );
    } else {
      if (normalMode) {
        localStorage.setItem("color-theme", "normal");
      } else {
        localStorage.setItem("color-theme", "light");
      }
    }
  }, [normalMode]);

  // dark mode light mode option
  useEffect(() => {
    // dark mode is white theme in our case
    if (localStorage.getItem("color-theme")) {
      if (!normalMode && localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
      }
      if (normalMode && localStorage.getItem("color-theme") === "normal") {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [normalMode]);

  // Side bar work related
  useEffect(() => {
    sideBarIconsOnly(sideBarRef.current);

    window.addEventListener("resize", () => {
      sideBarIconsOnly(sideBarRef.current);
    });
  }, [sideBarState]);

  useEffect(() => {
    if (!searchBarIsVisible) {
      // console.log("seach bar is not visible");
    }
    if (searchBarIsVisible) {
      // console.log("seach bar is visible");
    }
  }, [searchBarIsVisible, smallScreenState]);

  return (
    <div className="flex flex-col dark:bg-main-lightMode bg-main-blue h-[100vh] ">
      {/* top section */}
      <div className="flex items-center justify-around px-1 py-4 md:py-2 md:px-4 md:justify-between dark:bg-secondary-lightMode bg-secondary-blue">
        <div className="flex flex-row items-center justify-start ">
          {/* burger menu */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="w"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white cursor-pointer dark:text-black"
              onClick={() => {
                setSideBarState(!sideBarState);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>

          {/* logo div */}
          <div className="flex flex-col justify-center px-4 md:px-10">
            <img
              src={logo_image}
              className="w-8 h-8 md:w-12 md:h-12"
              alt=""
            />
          </div>
        </div>
        {/* search bar */}
        <div className="flex flex-row items-center flex-grow mr-5 md:flex-grow-0 md:mr-0 gap-x-5">
          <input
            ref={searchBarRef}
            type="text"
            className={` py-1 px-1 md:px-2 md:py-2 rounded-md outline-none md:static md:flex w-full md:w-80 dark:bg-white bg-slate-300`}
          />
          <svg
            onClick={() => {
              if (smallScreenState) {
              } else {
              }
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 font-bold text-white transition duration-100 ease-in-out cursor-pointer hover:scale-105 dark:text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        {/* bell and user related */}
        <div className="flex flex-row items-center pr-1 md:pr-5 gap-x-4 md:gap-x-10">
          {/* color mode icon */}
          <div className="flex flex-col items-center">
            {normalMode ? (
              <svg
                onClick={() => {
                  setNormalMode(!normalMode);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                onClick={() => {
                  setNormalMode(!normalMode);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer text-dark"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
            )}
          </div>
          {/* notify bell */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white cursor-pointer md:w-6 md:h-6 dark:text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </div>
          {/* user icon */}
          <div>
            <div className="relative flex flex-col items-center justify-center w-8 h-8 overflow-hidden bg-white rounded-full md:w-8 md:h-8">
              <img
                 src={logo_image}
                className="absolute top-0 right-0 cursor-pointer "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* body section */}
      <div
        ref={bodySectionRef}
        className="relative flex flex-row px-3 text-white dark:text-black dark:bg-main-lightMode bg-main-blue"
      >
        {/* sidebar */}

        <SideBar
          setCurrentTabGroup={setCurrentTabGroup}
          currentTabGroup={currentTabGroup}
          sideBarRef={sideBarRef}
        />
        {/* body */}
        <div className="w-full px-5 py-5">
          <div className="flex flex-col py-4 text-white dark:text-black dark:bg-slate-200 bg-light-darker bg-opacity-5 px-7">
            {/* header div */}

            {/* tab options */}

            <SelectedTabGroup />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;