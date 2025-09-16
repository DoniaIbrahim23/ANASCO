"use client";

import { useState, useEffect, useRef } from "react";
import { Search, Settings, Bell, History, Sun, Grid } from "lucide-react";
import Image from "next/image";
import type { FC } from "react";
import Notifications from "../Notifications/Notifications";

const Header: FC = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const notificationsData = [
    { id: 1, message: "New user registered 🎉", read: false },
    { id: 2, message: "Server restarted 🔄", read: true },
    { id: 3, message: "New order received 🛒", read: false },
  ];
  const unreadCount = notificationsData.filter((n) => !n.read).length;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full h-16 border-b border-gray-200 bg-white flex items-center justify-between px-4">
      {/*  Search */}
      <div className="flex-1 flex items-center gap-2 max-w-md">
        <Search className="text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-full outline-none bg-transparent text-sm text-gray-700 placeholder:text-gray-400"
        />
      </div>

      {/*Icons */}
      <div className="flex items-center gap-2 relative">
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <Sun className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <History className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <Grid className="w-5 h-5 text-gray-600" />
        </button>

        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>

        {/* Notification */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="relative p-2 rounded-full hover:bg-gray-100 transition"
          >
            <Bell className="w-5 h-5 text-gray-600" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 block w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </button>

          {open && <Notifications />}
        </div>

        {/* Avatar */}
        <Image
          src="/avatar.png"
          alt="User Avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
