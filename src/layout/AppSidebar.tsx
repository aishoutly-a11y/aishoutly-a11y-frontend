"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";
import ShoutlyLogo from "../components/common/ShoutlyLogo";
import {
  CalenderIcon,
  ChevronDownIcon,
  GridIcon,
  ListIcon,
  PieChartIcon,
  UserCircleIcon,
  BoxCubeIcon,
  PlugInIcon,
  ShootingStarIcon,
  DollarLineIcon
} from "../icons/index";


type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
  {
    icon: <GridIcon className="w-5 h-5" />,
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <ShootingStarIcon className="w-5 h-5" />,
    name: "Generate Content",
    path: "/generate-content",
  },
  {
    icon: <CalenderIcon className="w-5 h-5" />,
    name: "Content Calendar",
    path: "/calendar",
  },
  {
    icon: <BoxCubeIcon className="w-5 h-5" />,
    name: "Image & Reel Library",
    path: "/library",
  },
  {
    icon: <UserCircleIcon className="w-5 h-5" />,
    name: "Brand Settings",
    path: "/brand-settings",
  },
  {
    icon: <PieChartIcon className="w-5 h-5" />,
    name: "Social Accounts",
    path: "/social-accounts",
  },
  {
    icon: <DollarLineIcon className="w-5 h-5" />,
    name: "Subscription & Billing",
    path: "/billing",
  },
  {
    icon: <UserCircleIcon className="w-5 h-5" />,
    name: "Settings",
    path: "/settings",
  },
];


const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const [openSubmenu, setOpenSubmenu] = useState<{
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  const handleSubmenuToggle = (index: number) => {
    setOpenSubmenu((prev) => (prev?.index === index ? null : { index }));
  };

  useEffect(() => {
    let matchedIndex: number | null = null;
    navItems.forEach((nav, index) => {
      if (nav.subItems) {
        nav.subItems.forEach((subItem) => {
          if (isActive(subItem.path)) {
            matchedIndex = index;
          }
        });
      }
    });

    if (matchedIndex !== null) {
      const targetIndex = matchedIndex;
      setTimeout(() => {
        setOpenSubmenu((prev) => {
          if (prev?.index === targetIndex) return prev;
          return { index: targetIndex as number };
        });
      }, 0);
    } else {
      setTimeout(() => {
        setOpenSubmenu((prev) => (prev === null ? null : null));
      }, 0);
    }
  }, [pathname, isActive]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `main-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prev) => ({
          ...prev,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const renderMenuItems = (items: NavItem[]) => (
    <ul className="flex flex-col gap-2">
      {items.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index)}
              className={`flex items-center w-full px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer text-sm font-medium
                ${openSubmenu?.index === index
                  ? "bg-gray-100 text-gray-900"
                  : "hover:bg-gray-50 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/5"
                }`}
            >
              <span className={`mr-3 ${openSubmenu?.index === index ? "text-brand-500" : ""}`}>{nav.icon}</span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className="flex-1 text-left">{nav.name}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDownIcon
                  className={`w-4 h-4 ml-auto transition-transform duration-200 ${openSubmenu?.index === index ? "rotate-180" : ""}`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                href={nav.path}
                className={`flex items-center w-full px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium
                  ${isActive(nav.path)
                    ? "bg-black text-white shadow-lg shadow-black/10"
                    : "hover:bg-gray-50 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/5"
                  }`}
              >
                <span className={`mr-3 ${isActive(nav.path) ? "text-white" : ""}`}>{nav.icon}</span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="flex-1 text-left">{nav.name}</span>
                )}
              </Link>
            )
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-4 left-0 bg-white dark:bg-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-100 dark:border-gray-800
        ${isExpanded || isMobileOpen ? "w-[280px]" : isHovered ? "w-[280px]" : "w-[88px]"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`py-10 flex ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start px-4"}`}>
        <Link href="/">
          <ShoutlyLogo iconOnly={!isExpanded && !isHovered && !isMobileOpen} />
        </Link>
      </div>

      <div className="flex flex-col overflow-y-auto no-scrollbar flex-1 px-2">
        <nav className="mb-6">
          {renderMenuItems(navItems)}
        </nav>
      </div>

      {(isExpanded || isHovered || isMobileOpen) && (
        <div className="p-4 mb-8">
          <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-4 border border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Plan Details</span>
              <span className="bg-brand-500 text-[10px] font-bold text-white px-2 py-0.5 rounded-full uppercase">Pro</span>
            </div>
            <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">Growth Plan</p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden mt-3">
              <div className="bg-brand-500 h-full w-[85%]"></div>
            </div>
            <p className="text-[10px] text-gray-500 mt-2">850 / 1000 AI Credits Used</p>
          </div>
        </div>
      )}
    </aside>
  );
};

export default AppSidebar;
