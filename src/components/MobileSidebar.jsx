import React from "react";
import { primary } from "../variables";

function MobileSidebar({ handleSidebarState }) {
  const handleClick = () => {
    handleSidebarState();
  };

  return (
    <nav className="fixed top-0 right-0 z-20 bg-white h-screen w-1/2 text-primary text-lg">
      <div className="p-8">
        <button onClick={handleClick} className="flex justify-end">
          <svg
            height="1.75em"
            width="1.75em"
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
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MobileSidebar;
