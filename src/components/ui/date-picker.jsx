"use client";

import React, { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { CalendarIcon } from "lucide-react";

const DatePicker = ({ value, onChange, placeholder = "Select date" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDateChange = (e) => {
    onChange(e.target.value);
  };

  const handleIconClick = () => {
    // Focus the input to open the native date picker
    const input = document.querySelector('input[type="date"]');
    if (input) {
      input.showPicker();
    }
  };

  return (
    <div className="relative">
      <Input
        type="date"
        value={value}
        onChange={handleDateChange}
        className="bg-muted border-none focus-visible:ring-0 focus-visible:border-ring rounded-md w-full pr-10 [&::-webkit-calendar-picker-indicator]:hidden"
        placeholder={placeholder}
      />
      <Button
        type="button"
        variant="ghost"
        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent z-10"
        onClick={handleIconClick}
      >
        <CalendarIcon className="h-4 w-4 text-muted-foreground" />
      </Button>
    </div>
  );
};

export default DatePicker;
