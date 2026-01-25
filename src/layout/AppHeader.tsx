"use client";
import NotificationDropdown from "@/components/header/NotificationDropdown";
import UserDropdown from "@/components/header/UserDropdown";
import { useSidebar } from "@/context/SidebarContext";
import React from "react";
import { Facebook, Instagram, LinkedIn, Twitter } from "@/icons";

const AppHeader: React.FC = () => {
  const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();

  const handleToggle = () => {
    if (window.innerWidth >= 1024) {
      toggleSidebar();
    } else {
      toggleMobileSidebar();
    }
  };

  return (
    <header className="sticky top-0 flex w-full bg-white border-b border-gray-100 z-40 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center justify-between w-full px-6 py-4">
        {/* Left Side: Workspace Info */}
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden p-2 -ml-2 text-gray-500 hover:bg-gray-50 rounded-lg"
            onClick={handleToggle}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">My Workspace</h1>
            <span className="text-xs font-medium text-gray-400">Premium Plan</span>
          </div>
        </div>

        {/* Right Side: Social Icons & User */}
        <div className="flex items-center gap-6">
          {/* Social Icons (matching Figma colors) */}
          <div className="hidden md:flex items-center gap-3 pr-6 border-r border-gray-100 dark:border-gray-800">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 bg-[#F0F0F0]/50">
              <Instagram className="w-4 h-4 text-[#E4405F]" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 bg-[#F0F0F0]/50">
              <Facebook className="w-4 h-4 text-[#1877F2]" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 bg-[#F0F0F0]/50">
              <LinkedIn className="w-4 h-4 text-[#0A66C2]" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 bg-[#F0F0F0]/50">
              <Twitter className="w-4 h-4 text-[#1DA1F2]" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <NotificationDropdown />
            <UserDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;

