"use client";

import { useState } from "react";
import { Bell, User, Clock, CheckCircle } from "lucide-react";
import type { FC } from "react";

const mockNotifications = [
  { id: 1, message: "New user registered ", time: "Just now", read: false },
  {
    id: 2,
    message: "You have a bug that needs...",
    time: "59 minutes ago",
    read: true,
  },
  { id: 3, message: "New order received ", time: "12 hours ago", read: false },
  {
    id: 4,
    message: "Another notification",
    time: "Today, 11:59 AM",
    read: true,
  },
];

const mockActivities = [
  {
    id: 1,
    type: "bug",
    message: "You have a bug that needs...",
    time: "Just now",
  },
  {
    id: 2,
    type: "version",
    message: "Released a new version",
    time: "59 minutes ago",
  },
  { id: 3, type: "bug", message: "Submitted a bug", time: "12 hours ago" },
  {
    id: 4,
    type: "data",
    message: "Modified a data in Page X",
    time: "Today, 11:59 AM",
  },
  {
    id: 5,
    type: "delete",
    message: "Deleted a page in Project X",
    time: "Feb 2, 2023",
  },
];

const mockContacts = [
  { id: 1, name: "Natali Craig", avatar: "/path/to/avatar1.png" },
  { id: 2, name: "Drew Cano", avatar: "/path/to/avatar2.png" },
  { id: 3, name: "Orlando Diggs", avatar: "/path/to/avatar3.png" },
  { id: 4, name: "Andi Lane", avatar: "/path/to/avatar4.png" },
  { id: 5, name: "Kate Morrison", avatar: "/path/to/avatar5.png" },
  { id: 6, name: "Koray Okumus", avatar: "/path/to/avatar6.png" },
];

const Notifications: FC = () => {
  const [notifications, setNotifications] = useState(mockNotifications);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-md border border-gray-200 z-50 p-2">
      <div className="text-sm font-semibold text-gray-500 border-b pb-2 mb-2">
        Notifications
      </div>
      <ul className="max-h-60 overflow-y-auto">
        {notifications.length > 0 ? (
          notifications.map((n) => (
            <li
              key={n.id}
              className={`p-2 text-sm cursor-pointer hover:bg-gray-100 rounded-md ${
                n.read ? "text-gray-500" : "text-gray-800 font-medium"
              }`}
              onClick={() => markAsRead(n.id)}
            >
              {n.message}
            </li>
          ))
        ) : (
          <li className="p-2 text-sm text-gray-500">No new notifications.</li>
        )}
      </ul>

      {/* Activities Section */}
      <div className="mt-4 border-t pt-2">
        <h3 className="text-sm font-semibold text-gray-500 mb-2">Activities</h3>
        <div className="space-y-2">
          {mockActivities.map((a) => (
            <div key={a.id} className="flex items-start">
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-100 mr-2">
                {a.type === "bug" && <Bell className="w-3 h-3 text-red-500" />}
                {a.type === "version" && (
                  <CheckCircle className="w-3 h-3 text-green-500" />
                )}
                {a.type === "data" && (
                  <Clock className="w-3 h-3 text-blue-500" />
                )}
                {a.type === "delete" && (
                  <div className="w-2 h-2 rounded-full bg-black"></div>
                )}
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900">
                  {a.message}
                </p>
                <p className="text-xxs text-gray-400 mt-1">{a.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contacts Section */}
      <div className="mt-4 border-t pt-2">
        <h3 className="text-sm font-semibold text-gray-500 mb-2">Contacts</h3>
        <div className="space-y-2">
          {mockContacts.map((contact) => (
            <div key={contact.id} className="flex items-center">
              <p className="text-xs font-semibold text-gray-900">
                {contact.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
