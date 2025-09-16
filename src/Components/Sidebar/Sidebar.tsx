"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingCart,
  FolderKanban,
  GraduationCap,
  User,
  FileText,
  BarChart,
  Settings,
  Menu,
  X,
  Square,
  Folder,
} from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const dashboardLinks = [
    { name: "Default", href: "/#", icon: Square },
    { name: "eCommerce", href: "#", icon: ShoppingCart },
    { name: "Projects", href: "#", icon: Folder },
    { name: "Online Courses", href: "/#", icon: GraduationCap },
  ];

  const pageLinks = [
    { name: "User Profile", href: "/#", icon: User },
    { name: "Overview", href: "/#", icon: BarChart },
    { name: "Projects", href: "#", icon: Folder },
    { name: "Campaigns", href: "#", icon: BarChart },
    { name: "Documents", href: "#", icon: FileText },
    { name: "Followers", href: "#", icon: User },
    { name: "Account", href: "#", icon: Settings },
    { name: "Corporate", href: "#", icon: User },
    { name: "Blog", href: "#", icon: BarChart },
    { name: "Social", href: "#", icon: User },
  ];

  const linkClasses = (href: string) =>
    `flex items-center gap-2 p-2 rounded-md transition-colors duration-200 ${
      pathname === href
        ? "bg-gray-100 text-gray-800 font-medium border-l-4 border-blue-500"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  const subLinkClasses = (href: string) =>
    `flex items-center gap-2 pl-8 p-2 text-sm transition-colors duration-200 ${
      pathname === href
        ? "text-blue-600 font-medium"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <>
      <button
        className="md:hidden p-2 m-2 rounded-md border border-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed md:static top-0 left-0 min-h-screen w-64 bg-white border-r border-gray-200 p-4 flex flex-col z-50 overflow-y-auto
          transform transition-transform duration-300 ease-in-out
          ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-full md:translate-x-0 md:opacity-100"
          }
        `}
      >
        {/* Header*/}
        <div className="flex items-center gap-2 mb-6 p-2">
          <Image
            src="/avatar.png"
            alt="User Avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-lg font-semibold text-gray-800">
            ANASCO GROUP
          </span>
        </div>

        <div className="flex items-center gap-4 text-sm font-semibold text-gray-500 mb-4 px-2">
          <span className="cursor-pointer border-b-2 border-blue-500 text-blue-500 pb-1">
            Favorites
          </span>
          <span className="cursor-pointer">Recently</span>
        </div>

        <div className="mb-4">
          <h3 className="text-xs text-gray-400 uppercase font-semibold mb-2 px-2">
            Dashboards
          </h3>
          <nav className="flex flex-col gap-1">
            {dashboardLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={linkClasses(link.href)}
              >
                <link.icon className="w-5 h-5" />
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="text-xs text-gray-400 uppercase font-semibold mb-2 px-2">
            Pages
          </h3>
          <nav className="flex flex-col gap-1">
            {pageLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={subLinkClasses(link.href)}
              >
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
