import React, { Fragment, useState } from "react";
import MobileSidebar from "./MobileSidebar";
import WhiteLogoSvg from "../assets/SVG/Logo WhiteAsset 21.svg";
import { Dialog, Transition } from "@headlessui/react";
import "../styles/Navbar.css";

// TODO:
// - Add hamburger menu for mobile
// - Add nav items placeholders
// - Add effects for nav items
// - Add logo

function NavBar() {
  // Sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to close sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Function to open sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  return (
    <>
      <Transition
        show={isSidebarOpen}
        enter="transition duration-200 ease-out"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition duration-200 ease-out"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <Dialog open={isSidebarOpen} onClose={closeSidebar}>
          <Dialog.Panel>
            <MobileSidebar handleCloseSidebar={closeSidebar} />
          </Dialog.Panel>
        </Dialog>
      </Transition>

      <nav className="h-24 w-full fixed top-0 left-0 z-10 text-lg bg-gradient-to-b from-primary-dark">
        <div className="mx-auto max-w-full h-full p-4 lg:px-20 px-8 flex items-center justify-between">
          <a href="" className="flex items-center">
            <img
              src={WhiteLogoSvg}
              alt="Logo of cyb.org"
              className="h-10 lg:h-12 mr-1"
            />
            <h1 className="text-3xl lg:text-4xl font-semibold">CYB:ORG</h1>
          </a>
          <button onClick={openSidebar} className="lg:hidden">
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
          <div className="lg:flex space-x-1 hidden">
            <a href="" className="px-4">
              <span className="nav-items cursor-pointer">About</span>
            </a>
            <a href="" className="px-4">
              <span className="nav-items cursor-pointer">Projects</span>
            </a>
            <a href="" className="px-4">
              <span className="nav-items cursor-pointer">Contact Us</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
