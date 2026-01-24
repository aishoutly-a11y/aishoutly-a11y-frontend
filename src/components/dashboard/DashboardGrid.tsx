"use client";

import React from "react";
import Link from "next/link";
import {
    GridIcon,
    CalenderIcon,
    UserCircleIcon,
    BoxCubeIcon,
    PlugInIcon,
    PieChartIcon
} from "@/icons";

const items = [
    {
        title: "Content Library",
        description: "Manage and organize all your social media content in one central folder.",
        icon: <GridIcon className="w-6 h-6" />,
        path: "/dashboard",
        color: "bg-blue-50 text-blue-600"
    },
    {
        title: "Content Calendar",
        description: "Schedule your posts effortlessly across multiple platforms.",
        icon: <CalenderIcon className="w-6 h-6" />,
        path: "/calendar",
        color: "bg-purple-50 text-purple-600"
    },
    {
        title: "Social Accounts",
        description: "Connect and manage all your social media profiles in one place.",
        icon: <PlugInIcon className="w-6 h-6" />,
        path: "/social-accounts",
        color: "bg-pink-50 text-pink-600"
    },
    {
        title: "Image Reel Library",
        description: "Browse and select from a library of stunning images and reel templates.",
        icon: <BoxCubeIcon className="w-6 h-6" />,
        path: "/library",
        color: "bg-orange-50 text-orange-600"
    },
    {
        title: "Content Generator",
        description: "Leverage AI to create engaging posts and reels in seconds.",
        icon: <PieChartIcon className="w-6 h-6" />,
        path: "/generate-content",
        color: "bg-green-50 text-green-600"
    },
    {
        title: "Brand Settings",
        description: "Customize your brand identity and preferences for consistent results.",
        icon: <UserCircleIcon className="w-6 h-6" />,
        path: "/brand-settings",
        color: "bg-indigo-50 text-indigo-600"
    }
];

export default function DashboardGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
                <Link
                    key={item.title}
                    href={item.path}
                    className="group bg-white dark:bg-gray-800 p-8 rounded-[32px] border border-gray-100 dark:border-gray-700 transition-all hover:border-brand-500 hover:shadow-2xl hover:shadow-brand-500/5 hover:-translate-y-1"
                >
                    <div className={`w-14 h-14 rounded-[20px] ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        {item.icon}
                    </div>
                    <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">
                        {item.description}
                    </p>
                </Link>
            ))}
        </div>
    );
}
