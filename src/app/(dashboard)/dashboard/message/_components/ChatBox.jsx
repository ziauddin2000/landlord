"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaPlay, FaPause } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { PiUploadSimpleBold } from "react-icons/pi";
import { IoMdSend } from "react-icons/io";
import SparkWave from "./SparkWave";

const ChatBox = () => {
  const [playingAudioId, setPlayingAudioId] = useState(null);
  const audioRefs = useRef({});

  const messages = [
    {
      id: 1,
      sender: "You",
      text: "Hi, I was wondering if I could schedule a maintenance visit for the kitchen sink. It's leaking again.",
      time: "06:30 PM",
      date: "10 Feb, 2025",
      status: "read",
    },
    {
      id: 2,
      sender: "Jhon Doe",
      text: "Hi, I was wondering if I could schedule a maintenance visit for the kitchen sink. It's leaking again.",
      time: "06:30 PM",
    },
    {
      id: 3,
      sender: "Jhon Doe",
      image: "/assets/images/invested-01.jpg",
      text: "Hi, I was wondering if I could schedule",
      time: "06:30 PM",
    },
    {
      id: 4,
      sender: "Jhon Doe",
      audio: true,
      audioUrl: "/assets/audio/sound.mp3",
      time: "06:30 PM",
    },
    {
      id: 5,
      sender: "You",
      text: "Perfect. Thank you so much.",
      time: "06:30 PM",
      status: "read",
    },
    {
      id: 6,
      sender: "You",
      audio: true,
      audioUrl: "/assets/audio/sound.mp3",
      time: "06:31 PM",
      status: "read",
    },
  ];

  const handleAudioToggle = (audioId) => {
    const audioElement = audioRefs.current[audioId];

    if (!audioElement) return;

    if (playingAudioId === audioId) {
      audioElement.pause();
      audioElement.currentTime = 0;
      setPlayingAudioId(null);
    } else {
      if (playingAudioId && audioRefs.current[playingAudioId]) {
        audioRefs.current[playingAudioId].pause();
        audioRefs.current[playingAudioId].currentTime = 0;
      }

      audioElement.play();
      setPlayingAudioId(audioId);
    }
  };

  const handleAudioEnded = (audioId) => {
    setPlayingAudioId(null);
  };

  useEffect(() => {
    return () => {
      Object.values(audioRefs.current).forEach((audio) => {
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
    };
  }, []);

  return (
    <div className="w-full flex flex-col justify-between h-full pt-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 py-3 border-b px-5">
        <div className="flex items-center gap-3">
          <img
            src="/assets/images/user-01.jpg"
            alt="profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold text-base">Mr. Joe</div>
            <div className="text-xs text-green-500">Online</div>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-2xl text-t-primary cursor-pointer h-10 w-10 bg-gray-100 rounded-sm flex items-center justify-center outline-none">
            <HiOutlineDotsVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Option 1</DropdownMenuItem>
            <DropdownMenuItem>Option 2</DropdownMenuItem>
            <DropdownMenuItem>Option 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="py-3 h-full   chat-box-container overflow-y-auto">
        {/* Date */}
        <div className="flex justify-center my-2">
          <span className="bg-gray-100 text-xs text-gray-500 px-3 py-1 rounded-sm">
            10 Feb, 2025
          </span>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-2 sm:px-4 py-2 flex flex-col gap-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "You" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`
                flex flex-col max-w-[80%] sm:max-w-[70%] rounded-xl px-4 py-3 shadow
                ${msg.sender === "You" ? "bg-[#FCF1E6]" : "bg-[#F5F5F5]"}
              `}
              >
                {/* Sender Info */}
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm text-t-primary">
                    {msg.sender === "You" ? "You" : msg.sender}
                  </p>
                  <p className="text-sm text-gray-500">{msg.time}</p>
                  {msg.status === "read" && (
                    <img
                      src="/assets/images/icons/check-orange-ic.svg"
                      alt="check"
                      className="w-4 h-4"
                    />
                  )}
                </div>
                {/* Image */}
                {msg.image && (
                  <img
                    src={msg.image}
                    alt="attachment"
                    className="w-full max-w-xs h-28 object-cover rounded-md mb-2"
                  />
                )}
                {/* Text */}
                {msg.text && (
                  <div className="text-sm text-t-primary mb-1">{msg.text}</div>
                )}
                {/* Audio */}
                {msg.audio && (
                  <div className="flex items-center gap-2 mb-1">
                    {/* Play/Pause button */}
                    <button
                      onClick={() => handleAudioToggle(msg.id)}
                      className="w-8 h-8 flex items-center justify-center bg-white rounded-sm cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      {playingAudioId === msg.id ? (
                        <FaPause className="text-primary" />
                      ) : (
                        <FaPlay className="text-primary" />
                      )}
                    </button>

                    {/* Hidden audio element */}
                    <audio
                      ref={(el) => (audioRefs.current[msg.id] = el)}
                      src={msg.audioUrl}
                      onEnded={() => handleAudioEnded(msg.id)}
                      preload="metadata"
                      style={{ display: "none" }}
                    />
                    {/* Spark waveform */}
                    <div
                      className="flex items-end gap-[2px] h-6"
                      style={{ width: "100px" }}
                    >
                      <SparkWave playing={playingAudioId === msg.id} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 pt-5 px-2 sm:px-4 py-3 border-t bg-white">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 bg-white rounded-lg px-4 py-2 text-sm outline-none border border-[#c2c2c286] focus:border-primary transition h-[50px]"
        />
        <button className="rounded-sm bg-[#F5F5F5] hover:bg-gray-200 transition cursor-pointer h-[40px] w-[40px] flex items-center justify-center">
          <PiUploadSimpleBold className="text-xl" />
        </button>
        <button className="bg-primary hover:bg-primary/80 text-white rounded-sm transition cursor-pointer h-[40px] w-[40px] flex items-center justify-center">
          <IoMdSend className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
