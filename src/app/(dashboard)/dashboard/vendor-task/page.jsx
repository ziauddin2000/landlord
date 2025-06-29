"use client";
import React from "react";
import Analytics from "../_components/Analytics";
import TaskList from "./_components/TaskList";

const VendorTask = () => {
  return (
    <div className="px-3 py-4 sm:px-4 sm:py-4 lg:px-7 lg:py-4 bg-[#f5f5f5] min-h-screen">
      <Analytics></Analytics>
      <TaskList></TaskList>
    </div>
  );
};

export default VendorTask;
