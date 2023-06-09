import React, { useState } from "react";
import MobileSidebar from "./MobileSidebar";

function NavBar() {
  // TODO:
  // - Add hamburger menu for mobile
  // - Add nav items placeholders
  // - Add effects for nav items
  // - Add logo
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {isSidebarOpen && <MobileSidebar handleSidebarState={toggleSidebar} />}

      <nav className="h-24 w-full fixed top-0 left-0 z-10 text-lg bg-gradient-to-b from-primary-dark">
        <div className="mx-auto max-w-full h-full p-4 md:px-20 px-12 flex items-center justify-between">
          <a href="" className="md:px-4">
            [[[[ LOGO ]]]]
          </a>
          <button onClick={toggleSidebar} className="md:hidden">
            <svg
              height="1.75em"
              width="1.75em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="Menu / Menu_Alt_04">
                  {" "}
                  <path
                    id="Vector"
                    d="M5 17H19M5 12H19M5 7H13"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </button>
          <div className="md:flex space-x-1 hidden">
            <a href="" className="px-4">
              About
            </a>
            <a href="" className="px-4">
              Projects
            </a>
            <a href="" className="px-4">
              Contact us
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
