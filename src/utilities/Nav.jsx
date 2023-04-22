import { NavLink } from "react-router-dom";
import React, { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    id: "home",
    title: "Home",
    link: "/",
  },
  {
    id: "work",
    title: "Work",
    link: "work",
  },
  {
    id: "contact",
    title: "Contact",
    link: "contact",
  },
];

const Nav = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="relative flex justify-between items-center text-lg text-font-primary  h-20 bg-bg-secondary px-4 sm:px-20">
      <div className="">Logo Here</div>
      <div className="hidden md:flex">
        <ul className="flex">
          {navLinks.map((nav) => {
            return (
              <li key={nav.id} className="px-4 font-bold">
                {nav.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex md:hidden">
        <div>
          <button onClick={() => setShowSidebar((prev) => !prev)}>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
        <div
          className={`top-0 right-0 w-64 px-4 py-6 bg-bg-secondary fixed h-full z-40 ease-in-out duration-300 ${
            showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}>
          <div className="absolute right-4 top-6">
            <button onClick={() => setShowSidebar((prev) => !prev)}>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex flex-col bg-bg-secondary">
            {navLinks.map((nav) => {
              return (
                <li key={nav.id} className="px-4 font-bold mb-4">
                  {nav.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
