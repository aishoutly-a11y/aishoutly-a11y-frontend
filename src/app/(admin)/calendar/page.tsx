"use client";

import React from "react";
import Calendar from "@/components/calendar/Calendar";
import { PlusIcon } from "@/icons";

export default function ContentCalendar() {
    return (
        <div className="p-10 font-outfit max-w-[1400px] mx-auto">
            <div className="mb-12 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-2">Content Calendar</h1>
                    <p className="text-gray-500 dark:text-gray-400 font-medium text-lg">Manage and schedule your brand&apos;s digital presence.</p>
                </div>
                <div className="flex gap-4">
                    <button className="h-14 px-8 border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white font-black rounded-2xl text-sm transition-all hover:bg-gray-100">Batch View</button>
                    <button className="h-14 px-8 bg-black text-white font-black rounded-2xl text-sm shadow-xl shadow-black/10 flex items-center gap-2 hover:bg-gray-800 transition-all">
                        <PlusIcon className="w-5 h-5" />
                        Schedule New
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
                {/* Calendar Main View */}
                <div className="xl:col-span-2">
                    <div className="bg-white dark:bg-gray-800 rounded-[40px] p-8 border border-gray-100 dark:border-gray-700 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10">
                            <Calendar />
                        </div>
                    </div>
                </div>

                {/* Sidebar / Upcoming */}
                <div className="space-y-8">
                    <div className="bg-brand-50 dark:bg-brand-900/10 border border-brand-100 dark:border-brand-900/20 p-8 rounded-[40px]">
                        <h3 className="text-xl font-black text-brand-900 dark:text-brand-400 mb-2 tracking-tight">Post Analytics</h3>
                        <p className="text-brand-700 dark:text-gray-400 text-sm font-medium mb-6">You have 12 posts scheduled for this week. Great consistency!</p>
                        <div className="w-full bg-gray-200 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                            <div className="bg-brand-500 h-full w-[65%]" />
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-[40px] p-8 border border-gray-100 dark:border-gray-700 shadow-sm">
                        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">Queue Today</h3>
                        <div className="space-y-6">
                            {[
                                { title: "Morning Brew Promo", time: "09:00 AM", platform: "Instagram", color: "bg-[#ee2a7b]" },
                                { title: "Modern Interior Reels", time: "02:30 PM", platform: "TikTok", color: "bg-black" },
                                { title: "Tech Vision Update", time: "06:00 PM", platform: "LinkedIn", color: "bg-[#0a66c2]" },
                            ].map((post, i) => (
                                <div key={i} className="flex items-center gap-4 group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 -m-2 rounded-2xl transition-all">
                                    <div className={`w-14 h-14 rounded-2xl ${post.color} flex items-center justify-center text-white font-black text-xs shadow-lg`}>
                                        {post.platform.charAt(0)}
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-gray-900 dark:text-white text-sm">{post.title}</p>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">{post.platform} • {post.time}</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-10 py-4 border-2 border-dashed border-gray-100 dark:border-gray-700 rounded-2xl text-xs font-black text-gray-400 uppercase tracking-widest hover:border-brand-500 hover:text-brand-500 transition-all">
                            View Full Queue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
