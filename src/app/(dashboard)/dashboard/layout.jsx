"use client";

import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./_components/SideBar";
import TopBar from "./_components/TopBar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Handle click outside to close sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when sidebar is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  // Close SideBar
  const handleSideBarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex">
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" />
      )}

      {/* side bar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out z-55 w-[280px] sm:w-[320px] lg:w-[20%] xl:w-[15%] ${
          isSidebarOpen
            ? "transform translate-x-0"
            : "transform -translate-x-full lg:translate-x-0"
        }`}
      >
        <Sidebar handleSideBarClose={handleSideBarClose} />
      </div>

      {/* main content */}
      <div className="w-full lg:w-[80%] lg:ml-[20%] xl:lg:w-[85%] xl:lg:ml-[15%]">
        <TopBar handleSideBar={handleSideBar} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
