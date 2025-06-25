"use client";
import React, { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { ImClipboard } from "react-icons/im";
import { LuClipboardPenLine } from "react-icons/lu";

import Link from "next/link";

const TopBar = () => {
  // Notification Data
  const notifications = [
    {
      title: "Subscription",
      desc: "Your trial will expire in 14 days",
      time: "3m ago",
      icon: <IoHomeOutline />,
      highlighted: true,
    },
    {
      title: "Rental Request",
      desc: "Tenant Jonathan sent a new message",
      time: "12m ago",
      icon: <BiMessageRoundedDetail />,
      highlighted: true,
    },
    {
      title: "Maintenance Request",
      desc: "New maintenance request from Unit 3C",
      time: "38m ago",
      icon: <ImClipboard />,
    },
    {
      title: "Status Update",
      desc: "The status of Modern Property has been...",
      time: "1hr ago",
      icon: <LuClipboardPenLine />,
    },
  ];

  // Notification Dropdown
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Profile Data
  let profileData = [
    {
      path: "/dashboard/portfolio",
      title: "My Portfolio",
      icon: "/assets/images/icons/graph-ic.png",
    },
    {
      path: "/dashboard/subscription",
      title: "Subscription",
      icon: "/assets/images/icons/crown-ic-black.png",
    },
    {
      path: "/dashboard/setting",
      title: "Settings",
      icon: "/assets/images/icons/gear-black-ic.png",
    },
    {
      path: "/dashboard/logout",
      title: "Logout",
      icon: "/assets/images/icons/logout-ic.png",
    },
  ];

  // Profile Dropdown
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center px-3 py-4 sm:px-4 sm:py-4 lg:px-7 lg:py-4 bg-white shadow">
      {/* Left: Title */}
      <div className="flex items-center gap-2">
        <button className="block lg:hidden cursor-pointer hover:bg-gray-100 rounded-full p-2">
          <FaBarsStaggered className="text-[20px] lg:text-[22px]" />
        </button>
        <h1 className="hidden sm:block text-[24px] lg:text-[25px] xl:text-[32px] font-[600] text-[#170A00]">
          Dashboard
        </h1>
      </div>

      {/* Right: Search, Premium Plan, Notifications, Avatar */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
        {/* Search Box */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-[120px] sm:w-[200px] md:w-[250px] xl:w-[300px] pl-10 pr-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 " />
        </div>

        {/* Notification Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="cursor-pointer hover:bg-gray-100 rounded-full p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src="/assets/images/icons/bell-ic.png"
              alt="Bell Icon"
              className="h-[20px] w-[20px] lg:h-[24px] lg:w-[24px]"
            />
          </button>

          {isOpen && (
            <div className="absolute right-[-80px] sm:right-0 mt-2 w-[300px] sm:w-[400px] bg-white rounded-xl shadow-lg border border-gray-50 z-50">
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/icons/message-orange-ic.png"
                    alt="Message Icon"
                    className="h-[45px] w-[45px]"
                  />
                  <h3 className="font-[500] text-[16px] text-[#262626]">
                    Inbox
                  </h3>
                </div>

                <div className="flex items-center gap-1">
                  <img
                    src="assets/images/icons/check-orange-ic.png"
                    alt="Check Icon"
                  />
                  <span className="text-sm text-primary cursor-pointer">
                    Mark as read
                  </span>
                </div>
              </div>
              <div className="notification-era max-h-[300px] overflow-y-auto space-y-2 py-2">
                {notifications.map((note, i) => (
                  <Link
                    href="#"
                    key={i}
                    className={`flex items-start gap-4 px-4 py-3 cursor-pointer rounded-lg max-w-[96%] mx-auto ${
                      note.highlighted ? "bg-[#FCF1E6]" : ""
                    }`}
                  >
                    <div
                      className={`h-[40px] min-w-[40px] rounded-sm flex items-center justify-center text-[20px] ${
                        note.highlighted
                          ? "bg-primary text-white"
                          : "bg-[#FCF1E6] text-primary"
                      }`}
                    >
                      {note.icon}
                    </div>

                    <div>
                      <h4 className="font-[500] text-[16px] text-[#262626]">
                        {note.title}
                      </h4>
                      <p className="text-sm text-gray-600">{note.desc}</p>
                    </div>
                    <span className="ml-auto text-xs text-gray-400 whitespace-nowrap">
                      {note.time}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="text-center py-3">
                <Link
                  href="/notifications"
                  className="flex items-center justify-center w-fit mx-auto gap-2 text-sm cursor-pointer"
                >
                  <span className="block">View more</span>
                  <img
                    src="assets/images/icons/angle-bottom-ic.png"
                    alt="Angle Bottom"
                    className="w-[14px]"
                  />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Premium Plan */}
        <button className="cursor-pointer flex items-center gap-2 hover:bg-gray-100 rounded-full p-2">
          <img
            src="/assets/images/icons/crown-ic-black.png"
            alt="Premium Plan"
            className="h-[20px] w-[20px] lg:h-[24px] lg:w-[24px]"
          />
          <span className="hidden lg:block">Premium Plan</span>
        </button>

        {/* Profile */}
        <div className="relative flex" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer"
          >
            <img
              src="/assets/images/admin-profile.png"
              alt="User"
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover border border-gray-300"
            />
          </button>

          {menuOpen && (
            <div className="absolute top-[40px] lg:top-[50px] right-0 w-56 bg-white rounded-lg shadow-lg border border-gray-100 z-50">
              <ul className="text-[16px] font-[400]">
                {profileData.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={item.path}
                        className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100  ${
                          item.title === "Logout"
                            ? "text-red-500  border-b-0"
                            : ""
                        }`}
                      >
                        <img src={item.icon} alt={item.title} />
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
