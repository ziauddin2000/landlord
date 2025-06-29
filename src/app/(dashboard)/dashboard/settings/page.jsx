"use client";
import React, { useState } from "react";
import AccountSettings from "./_components/AccountSettings";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PaymentSettings from "./_components/PaymentSettings";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("account-settings");
  const [activeBreadcrumb, setActiveBreadcrumb] = useState("Account Settings");
  let tabs = [
    {
      label: "Account Settings",
      value: "account-settings",
    },
    {
      label: "Payment Settings",
      value: "payment-settings",
    },
  ];

  return (
    <div className="px-3 py-4 sm:px-4 sm:py-4 lg:px-7 lg:py-4 bg-[#f5f5f5] min-h-screen">
      <Breadcrumb className="*:text-[16px] py-3">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>Settings</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="text-t-primary">
              {activeBreadcrumb}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* tabs */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full py-3"
      >
        <TabsList className="py-3 flex flex-wrap gap-3 sm:gap-4 bg-transparent w-full sm:w-fit h-auto">
          {tabs.map((tab, index) => (
            <TabsTrigger
              key={index}
              value={tab.value}
              onClick={() => {
                setActiveTab(tab.value);
                setActiveBreadcrumb(tab.label);
              }}
              className={`
                px-3 py-3 rounded-md cursor-pointer text-sm sm:text-base font-[500]
                bg-white border border-[#f5f5f5] text-t-secondary  
                data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary
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
                {tab.value === "account-settings" && <AccountSettings />}
                {tab.value === "payment-settings" && <PaymentSettings />}
              </>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Settings;
