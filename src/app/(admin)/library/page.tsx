import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Library | Shoutly AI",
    description: "Manage your generated images and videos.",
};

export default function Library() {
    return (
        <div className="p-6 font-outfit">
            <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Media Library</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">All your AI-generated assets in one place.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition">
                        Filter
                    </button>
                    <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition shadow-lg shadow-brand-600/20">
                        Upload Asset
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8">
                <button className="px-6 py-3 text-sm font-medium text-brand-600 border-b-2 border-brand-600 dark:text-brand-400 dark:border-brand-400">All Assets</button>
                <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">Images</button>
                <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">Reels</button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
                    <div key={i} className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 cursor-pointer">
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition duration-200 z-10">
                            <button className="p-2 bg-white rounded-full shadow-lg text-gray-900 hover:scale-110 transition">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            </button>
                        </div>
                        {/* Placeholder for media */}
                        <div className="w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>

                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                            <p className="text-xs text-white font-medium truncate">Generated_Image_{i + 1}</p>
                        </div>
                    </div>
                ))}

                {/* Upload Placeholder */}
                <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 transition aspect-square">
                    <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    <span className="text-sm font-medium text-gray-500">Upload New</span>
                </div>
            </div>
        </div>
    );
}
