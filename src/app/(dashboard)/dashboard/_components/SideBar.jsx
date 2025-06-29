"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxCross2 } from "react-icons/rx";

const Sidebar = ({ handleSideBarClose }) => {
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
      path: "/dashboard/settings",
      icon: "/assets/images/icons/gear-ic.svg",
      label: "Settings",
    },
  ];
  return (
    <div className="h-screen bg-[#1f1f1f] text-white flex flex-col py-5 px-4 relative transition-all duration-300 ease-in-out">
      {/* close button */}
      <button
        onClick={handleSideBarClose}
        className="absolute top-4 right-4 cursor-pointer lg:hidden transition-opacity duration-300"
      >
        <RxCross2 className="text-[24px]" />
      </button>

      {/* Logo */}
      <div className="mb-10 transition-all duration-300 ease-in-out">
        <Link href="/dashboard">
          <img
            src="/assets/images/dash-logo.svg"
            alt="logo"
            className="w-[150px] h-[50px] xl:w-[186px] xl:h-[64px] transition-all duration-300 ease-in-out"
          />
        </Link>
      </div>

      {/* Menu */}
      <div className="text-sm space-y-6 transition-all duration-300 ease-in-out">
        <div className="transition-all duration-300 ease-in-out">
          <p className="text-white text-[16px] mb-4 transition-all duration-300 ease-in-out">
            Menu
          </p>

          <ul className="space-y-3 transition-all duration-300 ease-in-out">
            {menuItems.map((menu, index) => {
              return (
                <Link
                  href={menu.path}
                  key={index}
                  className={`flex items-center gap-3 hover:bg-[#383838] px-4 py-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out ${
                    pathname == menu.path ? "bg-[#383838]" : "bg-transparent"
                  }`}
                >
                  <Image
                    src={menu.icon}
                    alt="dashboard"
                    width={24}
                    height={24}
                    className="transition-all duration-300 ease-in-out"
                  ></Image>
                  <span className="text-[16px] transition-all duration-300 ease-in-out">
                    {menu.label}
                  </span>
                </Link>
              );
            })}
          </ul>
        </div>

        {/* Custom */}
        <div className="transition-all duration-300 ease-in-out">
          <p className="text-white text-[16px] mb-4 transition-all duration-300 ease-in-out">
            Custom
          </p>

          <ul className="space-y-3 transition-all duration-300 ease-in-out">
            {customItems.map((customItems, index) => {
              return (
                <Link
                  href={customItems.path}
                  key={index}
                  className={`flex items-center gap-3 hover:bg-[#383838] px-4 py-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out ${
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
                    className="transition-all duration-300 ease-in-out"
                  ></Image>
                  <span className="text-[16px] transition-all duration-300 ease-in-out">
                    {customItems.label}
                  </span>
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
