"use client";
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChoosePlan from "./_components/ChoosePlan";
import ManageSubscription from "./_components/ManageSubscription";

const Subscription = () => {
  const [activeTab, setActiveTab] = useState("choose-plan");
  let tabs = [
    {
      label: "Choose Plan",
      value: "choose-plan",
    },
    {
      label: "Manage Subscription",
      value: "manage-subscription",
    },
  ];

  return (
    <div className="px-3 py-4 sm:px-4 sm:py-4 lg:px-7 lg:py-4 bg-[#f5f5f5] min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb className="*:text-[16px] py-3">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>Subscription Plan</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* tabs */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full py-3 "
      >
        <TabsList className="flex sm:gap-4 bg-transparent w-fit sm:w-fit h-auto rounded-none p-0  border-b border-[#D6D6D6]">
          {tabs.map((tab, index) => (
            <TabsTrigger
              key={index}
              value={tab.value}
              onClick={() => {
                setActiveTab(tab.value);
              }}
              className={`
                px-2 sm:px-3 py-2 cursor-pointer text-sm sm:text-base font-[500]
                bg-transparent border-b-2 border-transparent text-t-secondary  
                rounded-none 
                data-[state=active]:text-t-primary data-[state=active]:border-b-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent 
                data-[state=active]:rounded-none 
                transition 
              `}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* content */}
        {tabs.map((tab, index) => (
          <TabsContent key={index} value={tab.value}>
            {activeTab === tab.value && (
              <>
                {tab.value === "choose-plan" && <ChoosePlan />}
                {tab.value === "manage-subscription" && <ManageSubscription />}
              </>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Subscription;
