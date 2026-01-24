import React from "react";
import type { Metadata } from "next";
import Calendar from "@/components/calendar/Calendar";

export const metadata: Metadata = {
    title: "Content Calendar | Shoutly AI",
    description: "View and manage your scheduled social media posts.",
};

export default function ContentCalendar() {
    return (
        <div className="p-6 font-outfit">
            <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Content Calendar</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">View and manage all your scheduled posts across platforms.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition">
                        Filter
                    </button>
                    <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition shadow-lg shadow-brand-600/20">
                        + Schedule Post
                    </button>
                </div>
            </div>

            {/* Platform Filters */}
            <div className="mb-6 flex gap-3">
                <button className="px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-medium shadow-sm">
                    All Platforms
                </button>
                <button className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                    Instagram
                </button>
                <button className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                    LinkedIn
                </button>
                <button className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                    Twitter/X
                </button>
            </div>

            {/* Calendar Component */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                <Calendar />
            </div>

            {/* Upcoming Posts Preview */}
            <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="border-b border-gray-100 px-6 py-4 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Upcoming This Week</h3>
                </div>
                <div className="p-6">
                    <div className="flex flex-col gap-4">
                        {[
                            { title: "New Product Launch Teaser", date: "Today, 2:00 PM", platform: "Instagram", color: "bg-pink-500" },
                            { title: "Industry Insights Article", date: "Tomorrow, 10:00 AM", platform: "LinkedIn", color: "bg-blue-600" },
                            { title: "Customer Success Story", date: "Jan 20, 3:00 PM", platform: "Twitter/X", color: "bg-black dark:bg-white" },
                        ].map((post, i) => (
                            <div key={i} className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-4 dark:bg-gray-900 dark:border-gray-700">
                                <div className="flex items-center gap-4">
                                    <div className={`h-16 w-16 rounded-lg ${post.color} object-cover`}></div>
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">{post.title}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
                                    </div>
                                </div>
                                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                    {post.platform}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
