"use client";

import { useState } from "react";
import { Bell, User, Clock, CheckCircle, Bug, Trash2, Edit2, PlayCircle, Eye, Mail, BarChart, ShoppingCart, Folder, Book, User as UserIcon, LogIn, Rss, MessageCircle } from "lucide-react";
import type { FC } from "react";

const mockData = {
  "stats": [
    {
      "title": "Views",
      "value": "721K",
      "change": "+11.01%",
      "type": "positive"
    },
    {
      "title": "Visits",
      "value": "367K",
      "change": "+0.03%",
      "type": "positive"
    },
    {
      "title": "New Users",
      "value": "1,156",
      "change": "+15.03%",
      "type": "negative"
    },
    {
      "title": "Active Users",
      "value": "239K",
      "change": "+6.00%",
      "type": "positive"
    }
  ],
  "trafficLineChart": [
    { "month": "Jan", "current": 700000, "previous": 1200000 },
    { "month": "Feb", "current": 1000000, "previous": 1400000 },
    { "month": "Mar", "current": 1700000, "previous": 1800000 },
    { "month": "Apr", "current": 1000000, "previous": 1200000 },
    { "month": "May", "current": 1500000, "previous": 1800000 },
    { "month": "Jun", "current": 2000000, "previous": 2000000 },
    { "month": "Jul", "current": 2200000, "previous": 1900000 }
  ],
  "trafficByWebsiteData": [
    { "name": "Google", "value": 80 },
    { "name": "YouTube", "value": 70 },
    { "name": "Instagram", "value": 60 },
    { "name": "Pinterest", "value": 50 },
    { "name": "Facebook", "value": 40 },
    { "name": "Twitter", "value": 30 },
    { "name": "Tumblr", "value": 20 }
  ],
  "trafficByDeviceData": [
    { "name": "Linux", "value": 18 },
    { "name": "Mac", "value": 22 },
    { "name": "iOS", "value": 19 },
    { "name": "Windows", "value": 25 },
    { "name": "Android", "value": 8 },
    { "name": "Other", "value": 22 }
  ],
  "trafficByLocationData": [
    { "name": "United States", "value": 38.6 },
    { "name": "Canada", "value": 22.5 },
    { "name": "Mexico", "value": 30.8 },
    { "name": "Other", "value": 8.1 }
  ],
  "barChartData": [
    { "name": "Mon", "sales": 400, "revenue": 240 },
    { "name": "Tue", "sales": 300, "revenue": 139 },
    { "name": "Wed", "sales": 200, "revenue": 980 },
    { "name": "Thu", "sales": 278, "revenue": 390 },
    { "name": "Fri", "sales": 189, "revenue": 480 },
    { "name": "Sat", "sales": 239, "revenue": 380 },
    { "name": "Sun", "sales": 349, "revenue": 430 }
  ],
  "lineChartData": [
    { "month": "Jan", "views": 4000, "visits": 2400 },
    { "month": "Feb", "views": 3000, "visits": 1398 },
    { "month": "Mar", "views": 2000, "visits": 9800 },
    { "month": "Apr", "views": 2780, "visits": 3908 },
    { "month": "May", "views": 1890, "visits": 4800 },
    { "month": "Jun", "views": 2390, "visits": 3800 },
    { "month": "Jul", "views": 3490, "visits": 4300 }
  ],
  "donutChartData": [
    { "name": "Group A", "value": 400 },
    { "name": "Group B", "value": 300 },
    { "name": "Group C", "value": 300 },
    { "name": "Group D", "value": 200 }
  ],
  "notifications": [
    { "id": 1, "message": "You have a bug that needs...", "time": "Just now" },
    { "id": 2, "message": "New user registered", "time": "59 minutes ago" },
    { "id": 3, "message": "You have a bug that needs...", "time": "12 hours ago" },
    { "id": 4, "message": "Andi Lane subscribed to you", "time": "Today, 11:59 AM" }
  ],
  "contacts": [
    { "id": 1, "name": "Natali Craig", "avatar": "/path/to/avatar1.png" },
    { "id": 2, "name": "Drew Cano", "avatar": "/path/to/avatar2.png" },
    { "id": 3, "name": "Orlando Diggs", "avatar": "/path/to/avatar3.png" },
    { "id": 4, "name": "Andi Lane", "avatar": "/path/to/avatar4.png" },
    { "id": 5, "name": "Kate Morrison", "avatar": "/path/to/avatar5.png" },
    { "id": 6, "name": "Koray Okumus", "avatar": "/path/to/avatar6.png" }
  ],
  "activities": [
    { "id": 1, "message": "You have a bug that needs...", "time": "Just now", "type": "bug" },
    { "id": 2, "message": "Released a new version", "time": "59 minutes ago", "type": "version" },
    { "id": 3, "message": "Submitted a bug", "time": "12 hours ago", "type": "bug" },
    { "id": 4, "message": "Modified A data in Page X", "time": "Today, 11:59 AM", "type": "data" },
    { "id": 5, "message": "Deleted a page in Project X", "time": "Feb 2, 2023", "type": "delete" }
  ],
  "trafficByDevice": [
    { "name": "Desktop", "value": 400 },
    { "name": "Mobile", "value": 300 },
    { "name": "Tablet", "value": 200 },
    { "name": "Other", "value": 100 }
  ]
};

const activityIcons = {
  "bug": <Bug className="w-4 h-4 text-red-500" />,
  "version": <CheckCircle className="w-4 h-4 text-green-500" />,
  "data": <Edit2 className="w-4 h-4 text-blue-500" />,
  "delete": <Trash2 className="w-4 h-4 text-gray-500" />,
};

const Notifications: FC = () => {
  const [notifications] = useState(mockData.notifications);
  const activities = mockData.activities;
  const contacts = mockData.contacts;

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
              className="p-2 text-sm cursor-pointer hover:bg-gray-100 rounded-md text-gray-800 font-medium"
            >
              <div className="flex items-center gap-2">
                {n.message.includes("bug") && <Bug className="w-4 h-4 text-red-500" />}
                {n.message.includes("user registered") && <User className="w-4 h-4 text-purple-500" />}
                {n.message.includes("subscribed") && <Mail className="w-4 h-4 text-blue-500" />}
                <p className="flex-1">{n.message}</p>
              </div>
              <p className="text-xs text-gray-400 mt-1">{n.time}</p>
            </li>
          ))
        ) : (
          <li className="p-2 text-sm text-gray-500">No new notifications.</li>
        )}
      </ul>

      <div className="mt-4 border-t pt-2">
        <h3 className="text-sm font-semibold text-gray-500 mb-2">Activities</h3>
        <div className="space-y-2">
          {activities.map((a) => (
            <div key={a.id} className="flex items-start">
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-100 mr-2">
                {activityIcons[a.type as keyof typeof activityIcons]}
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

    <div className="mt-4 border-t pt-2">
  <h3 className="text-sm font-semibold text-gray-500 mb-2">Contacts</h3>
  <div className="space-y-2">
    {contacts.map((contact) => (
      <div key={contact.id} className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full overflow-hidden">
          <img 
            src="/avatar.png"
            alt="User Avatar" 
            className="w-full h-full object-cover rounded-full" 
          />
        </div>
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