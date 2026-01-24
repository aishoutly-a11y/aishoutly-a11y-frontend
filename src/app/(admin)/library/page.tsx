"use client";

import React, { useState } from "react";
import { DownloadIcon, TrashBinIcon, PlusIcon } from "@/icons";

const categories = ["All Assets", "Real Estate", "Beauty", "Health", "Education", "Travel", "Food", "Fashion"];

export default function Library() {
    const [activeTab, setActiveTab] = useState("All Assets");

    return (
        <div className="p-10 font-outfit">
            <div className="mb-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-2">Image Reel Library</h1>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Browse and select from 10,000+ high-quality AI assets.</p>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3.5 bg-gray-50 dark:bg-gray-800 text-red-500 font-black rounded-2xl border border-transparent hover:border-red-100 transition-all">
                        <TrashBinIcon className="w-5 h-5" />
                        Delete Selected
                    </button>
                    <button className="flex items-center gap-2 px-8 py-3.5 bg-black text-white font-black rounded-2xl shadow-xl shadow-black/10 hover:bg-gray-800 transition-all">
                        <PlusIcon className="w-5 h-5" />
                        Add New
                    </button>
                </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all ${activeTab === cat
                            ? "bg-brand-500 text-white shadow-lg shadow-brand-500/20"
                            : "bg-white dark:bg-gray-800 text-gray-500 border border-gray-100 dark:border-gray-700 hover:border-brand-200"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
                    <div key={i} className="group relative rounded-[32px] overflow-hidden aspect-[3/4] bg-gray-100 dark:bg-gray-800 border border-transparent hover:border-brand-500 transition-all cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-brand-500/5">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-10" />

                        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all">
                            <input type="checkbox" className="w-5 h-5 rounded-lg border-white/20 bg-white/10 backdrop-blur-md text-brand-500 focus:ring-brand-500" />
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                            <div className="flex gap-3">
                                <button className="p-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl text-white hover:bg-white hover:text-black transition-all">
                                    <DownloadIcon className="w-5 h-5" />
                                </button>
                                <button className="p-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl text-white hover:bg-red-500 hover:border-red-500 transition-all">
                                    <TrashBinIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Image Placeholder */}
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800" />

                        <div className="absolute bottom-6 left-6 right-6 z-20">
                            <p className="text-white font-bold text-sm tracking-tight mb-1 truncate">Modern Interior Design</p>
                            <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">Real Estate</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
