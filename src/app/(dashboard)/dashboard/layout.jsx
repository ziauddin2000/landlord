import React from "react";
import Sidebar from "./_components/SideBar";
import TopBar from "./_components/TopBar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* side bar */}
      <div className="fixed top-0 left-0 w-[20%] xl:w-[15%] hidden lg:block">
        <Sidebar></Sidebar>
      </div>
      {/* main content */}
      <div className="w-full lg:w-[80%] lg:ml-[20%] xl:lg:w-[85%] xl:lg:ml-[15%]">
        <TopBar></TopBar>
        {children}
      </div>
    </div>
  );
};

export default Layout;
