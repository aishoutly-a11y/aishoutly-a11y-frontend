"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PlusIcon, Facebook, Instagram, LinkedIn, Twitter, Youtube, EyeIcon, PencilIcon, TrashBinIcon } from "@/icons";

const calendarData = [
    { day: "Sunday - 28", time: "08:00pm", type: "reels", platforms: ["fb", "tw", "in", "yt", "ig"] },
    { day: "Monday - 29", time: "08:00pm", type: "images", platforms: ["fb", "ig"] },
    { day: "Tuesday - 30", time: "08:00pm", type: "reels", platforms: ["in", "tw", "yt", "ig"] },
    { day: "Wednesday - 31", time: "08:00pm", type: "images", platforms: ["ig"] },
    { day: "Thursday - 1", time: "08:00pm", type: "reels", platforms: ["fb", "tw", "in", "yt", "ig"] },
    { day: "Friday - 2", time: "08:00pm", type: "reels", platforms: ["fb", "tw", "in", "yt", "ig"] },
    { day: "Sunday - 3", time: "08:00pm", type: "images", platforms: ["ig"] },
    { day: "Monday - 4", time: "08:00pm", type: "images", platforms: ["tw", "in", "ig"] },
    { day: "Tuesday - 5", time: "08:00pm", type: "reels", platforms: ["fb", "ig"] },
    { day: "Wednesday - 6", time: "08:00pm", type: "reels", platforms: ["in", "ig"] },
    { day: "Thursday - 7", time: "08:00pm", type: "images", platforms: ["ig"] },
    { day: "Friday - 8", time: "08:00pm", type: "reels", platforms: ["fb", "tw", "in", "ig"] },
];

export default function ContentCalendar() {
    const [view, setView] = useState("14-day");

    return (
        <div className="p-8 font-arial bg-gray-50/30 min-h-screen">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-[28px] font-bold text-gray-900 mb-1">Content Calendar</h1>
                        <p className="text-gray-400 text-sm font-medium">Manage your auto-scheduled content</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="bg-white border border-gray-100 p-1 rounded-xl flex shadow-sm">
                            {["14-day", "monthly", "365-day"].map((v) => (
                                <button
                                    key={v}
                                    onClick={() => setView(v)}
                                    className={`px-6 py-2.5 rounded-lg text-xs font-bold transition-all ${view === v ? "bg-black text-white" : "text-gray-400 hover:text-gray-600"}`}
                                >
                                    {v}
                                </button>
                            ))}
                        </div>
                        <button className="h-12 px-6 bg-black text-white font-bold rounded-xl text-xs flex items-center gap-2 hover:bg-gray-800 transition-all shadow-lg shadow-black/10">
                            <PlusIcon className="w-4 h-4" />
                            Schedule New
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-sm font-bold text-gray-900">December 2024</h2>
                        <div className="flex items-center gap-4">
                            <div className="flex border border-gray-100 rounded-lg overflow-hidden">
                                <button className="p-2 hover:bg-gray-50 border-r border-gray-100"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
                                <button className="p-2 hover:bg-gray-50"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
                            </div>
                            <button className="px-4 py-2 border border-gray-100 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50">Today</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {calendarData.map((item, idx) => (idx < 12 &&
                            <div key={idx} className="bg-white border border-gray-100 rounded-[24px] overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.02)] group hover:border-brand-500/20 transition-all">
                                <div className="p-5 border-b border-gray-50">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xs font-bold text-gray-400">{item.day}</h3>
                                        <div className="flex gap-1">
                                            {item.platforms.includes("fb") && <div className="text-blue-600"><Facebook className="w-3.5 h-3.5" /></div>}
                                            {item.platforms.includes("tw") && <div className="text-black"><Twitter className="w-3.5 h-3.5" /></div>}
                                            {item.platforms.includes("in") && <div className="text-blue-700"><LinkedIn className="w-3.5 h-3.5" /></div>}
                                            {item.platforms.includes("yt") && <div className="text-red-600"><Youtube className="w-3.5 h-3.5" /></div>}
                                            {item.platforms.includes("ig") && <div className="text-pink-600"><Instagram className="w-3.5 h-3.5" /></div>}
                                        </div>
                                    </div>
                                    <p className="text-[10px] font-bold text-gray-900 mb-4">{item.time}</p>
                                    <p className="text-[10px] text-gray-400 line-clamp-2 leading-relaxed mb-4">Guess the next hotspot in town 😂 We can&apos;t wait to see you at the.......&quot;</p>

                                    <div className="relative aspect-[16/10] bg-gray-100 rounded-xl overflow-hidden mb-4">
                                        <Image
                                            src="/images/placeholder-image.jpg"
                                            alt="Content Preview"
                                            fill
                                            className="object-cover grayscale"
                                        />
                                        {item.type === "reels" && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-center gap-6 pt-2">
                                        <button className="text-gray-300 hover:text-gray-900 transition-colors"><PencilIcon className="w-4 h-4" /></button>
                                        <button className="text-gray-300 hover:text-gray-900 transition-colors"><EyeIcon className="w-4 h-4" /></button>
                                        <button className="text-gray-300 hover:text-red-500 transition-colors"><TrashBinIcon className="w-4 h-4" /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-50 flex items-center justify-center gap-8">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-100 rounded-md"></div>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Images</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-pink-100 rounded-md"></div>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Reels</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-purple-100 rounded-md"></div>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Festivals</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-orange-100 rounded-md"></div>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Edited</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
