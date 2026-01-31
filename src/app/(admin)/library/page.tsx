"use client";

import React, { useState } from "react";
import { PlusIcon } from "@/icons";

const libraryItems = [
    { type: "Motivation", color: "bg-[#f5f3ff]" },
    { type: "Product", color: "bg-[#eff6ff]" },
    { type: "Tutorial", color: "bg-[#f5f3ff]" },
    { type: "Festival", color: "bg-[#f0fdf4]" },
    { type: "Motivation", color: "bg-[#fefce8]" },
    { type: "Product", color: "bg-[#f5f3ff]" },
];

export default function Library() {
    const [activeTab, setActiveTab] = useState("Reels");

    return (
        <div className="p-8 font-arial max-w-[1600px] mx-auto min-h-screen pb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <div>
                    <h1 className="text-[28px] font-bold text-gray-900 mb-1 tracking-tight">Image & Reel Library</h1>
                    <p className="text-gray-400 text-sm font-medium">Browse and manage your content templates</p>
                </div>
                <button className="h-12 px-8 bg-black text-white font-bold rounded-xl text-xs flex items-center gap-2 hover:bg-gray-800 transition-all shadow-lg shadow-black/10">
                    <PlusIcon className="w-4 h-4" />
                    Upload Custom
                </button>
            </div>

            <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
                {/* Search & Filters Header */}
                <div className="p-6 md:px-10 md:py-8 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-8">
                        {["Images", "Reels", "Festivals & Occasions"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-sm font-bold transition-all relative pb-2 ${activeTab === tab ? "text-gray-900" : "text-gray-400 hover:text-gray-600"}`}
                            >
                                {tab}
                                {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-1 bg-black rounded-full" />}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative flex-1 md:w-[320px]">
                            <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            <input
                                type="text"
                                placeholder="Search library..."
                                className="w-full h-11 pl-12 pr-4 bg-gray-50 border border-gray-100 rounded-xl text-[13px] font-medium focus:bg-white focus:border-brand-500 transition-all outline-none"
                            />
                        </div>
                        <button className="h-11 px-5 border border-gray-100 rounded-xl text-[13px] font-bold text-gray-600 flex items-center gap-2 hover:bg-gray-50 transition-all">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                            Filters
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="p-8 md:p-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                        {Array.from({ length: 18 }).map((_, i) => {
                            const item = libraryItems[i % libraryItems.length];
                            return (
                                <div key={i} className={`aspect-[9/16] rounded-2xl ${item.color} p-4 relative group cursor-pointer transition-all hover:shadow-xl hover:shadow-brand-500/5 hover:-translate-y-1 group`}>
                                    <div className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[8px] font-bold text-gray-500 tracking-widest absolute top-4 left-4 border border-white shadow-sm uppercase group-hover:bg-white transition-all">
                                        {item.type}
                                    </div>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all rounded-2xl" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

