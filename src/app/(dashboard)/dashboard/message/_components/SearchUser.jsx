"use client";

import { IoSearchOutline } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRef, useState, useEffect } from "react";

const SearchUser = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  //   User List
  const userList = [
    {
      id: 1,
      image: "https://github.com/shadcn.png",
      isActive: true,
    },
    {
      id: 2,
      image: "https://github.com/shadcn.png",
      isActive: false,
    },
    {
      id: 3,
      image: "https://github.com/shadcn.png",
      isActive: false,
    },
    {
      id: 4,
      image: "https://github.com/shadcn.png",
      isActive: true,
    },
    {
      id: 5,
      image: "https://github.com/shadcn.png",
      isActive: false,
    },
    {
      id: 6,
      image: "https://github.com/shadcn.png",
      isActive: true,
    },
    {
      id: 7,
      image: "https://github.com/shadcn.png",
      isActive: false,
    },
  ];

  //   Drag Slide to User List
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 0.5; // smoother movement left to right
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search here..."
          name=""
          id=""
          className="w-full border border-[#E0E0E0] rounded-md p-2 pl-12 h-[56px] text-base focus:outline-none focus:border-primary"
        />
        <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-t-secondary text-[25px]" />
      </div>

      <div
        ref={scrollContainerRef}
        className="user-list flex gap-5 mt-4 overflow-x-auto cursor-grab active:cursor-grabbing select-none scrollbar-hide"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          userSelect: "none",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
        }}
      >
        {userList.map((user) => (
          <div key={user.id} className="user-item cursor-pointer relative">
            <Avatar className="w-[50px] h-[50px]">
              <AvatarImage
                className="select-none pointer-events-none"
                src={user.image}
                draggable={false}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {/* indicator */}
            {user.isActive && (
              <div className="h-[12px] w-[12px] bg-[#04A755] rounded-full absolute top-1 left-0"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchUser;
