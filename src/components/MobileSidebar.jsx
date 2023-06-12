import React from "react";
import { primary } from "../variables";

function MobileSidebar({ handleCloseSidebar }) {
  return (
    <>
      <div
        onClick={handleCloseSidebar}
        className="fixed z-20 top-0 left-0 w-full h-screen bg-black opacity-50"
      ></div>

      <nav className="fixed z-30 top-0 right-0 bg-white h-screen w-1/2 text-primary text-lg">
        <div className="p-8">
          <div className="w-full flex items-center justify-end">
            <button onClick={handleCloseSidebar}>
              <svg
                height="1.5em"
                width="1.5em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Menu / Close_LG">
                    {" "}
                    <path
                      id="Vector"
                      d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                      stroke={primary}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </button>
          </div>

          <ul className="my-4">
            <li className="mb-4 ">
              <a href="">
                <span className="active:ring-4 active:ring-offset-2 active:ring-primary-light">
                  About
                </span>
              </a>
            </li>
            <li className="mb-4">
              <a href="">
                <span className="active:ring-4 active:ring-offset-2 active:ring-primary-light">
                  Projects
                </span>
              </a>
            </li>
            <li className="mb-4">
              <a href="">
                <span className="active:ring-4 active:ring-offset-2 active:ring-primary-light">
                  Contact Us
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default MobileSidebar;
