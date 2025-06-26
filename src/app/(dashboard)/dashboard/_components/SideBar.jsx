"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  let menuItems = [
    {
      path: "/dashboard",
      icon: "/assets/images/icons/dashboard-ic.svg",
      label: "Dashboard",
    },
    {
      path: "/dashboard/request",
      icon: "/assets/images/icons/request-ic.svg",
      label: "Request",
    },

    {
      path: "/dashboard/vendor-task",
      icon: "/assets/images/icons/users-ic.svg",
      label: "Vendor Task",
    },
    {
      path: "/dashboard/property",
      icon: "/assets/images/icons/property-ic.svg",
      label: "Property",
    },
    {
      path: "/dashboard/message",
      icon: "/assets/images/icons/message-ic.svg",
      label: "Message",
    },
    {
      path: "/dashboard/financial",
      icon: "/assets/images/icons/financial-ic.svg",
      label: "Financial",
    },
  ];

  let customItems = [
    {
      path: "/dashboard/subscription",
      icon: "/assets/images/icons/crown-ic.svg",
      label: "Subscription",
    },
    {
      path: "/dashboard/setting",
      icon: "/assets/images/icons/gear-ic.svg",
      label: "Setting",
    },
  ];
  return (
    <div className="h-screen bg-[#1f1f1f] text-white flex flex-col py-5 px-4">
      {/* Logo */}
      <div className="mb-10">
        <Link href="/dashboard">
          <img
            src="/assets/images/dash-logo.svg"
            alt="logo"
            className="w-[150px] h-[50px] xl:w-[186px] xl:h-[64px]"
          />
        </Link>
      </div>

      {/* Menu */}
      <div className="text-sm space-y-6">
        <div>
          <p className="text-white text-[16px] mb-4">Menu</p>

          <ul className="space-y-3">
            {menuItems.map((menu, index) => {
              return (
                <Link
                  href={menu.path}
                  key={index}
                  className={`flex items-center gap-3 hover:bg-[#383838] px-4 py-3 rounded-md cursor-pointer ${
                    pathname == menu.path ? "bg-[#383838]" : "bg-transparent"
                  }`}
                >
                  <Image
                    src={menu.icon}
                    alt="dashboard"
                    width={24}
                    height={24}
                  ></Image>
                  <span className="text-[16px]">{menu.label}</span>
                </Link>
              );
            })}
          </ul>
        </div>

        {/* Custom */}
        <div>
          <p className="text-white text-[16px] mb-4">Custom</p>

          <ul className="space-y-3">
            {customItems.map((customItems, index) => {
              return (
                <Link
                  href={customItems.path}
                  key={index}
                  className={`flex items-center gap-3 hover:bg-[#383838] px-4 py-3 rounded-md cursor-pointer ${
                    pathname == customItems.path
                      ? "bg-[#383838]"
                      : "bg-transparent"
                  }`}
                >
                  <Image
                    src={customItems.icon}
                    alt={customItems.label}
                    width={24}
                    height={24}
                  ></Image>
                  <span className="text-[16px]">{customItems.label}</span>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
