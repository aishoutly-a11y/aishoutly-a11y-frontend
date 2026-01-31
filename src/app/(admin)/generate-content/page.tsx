"use client";
import React, { useState } from "react";
import { ShootingStarIcon } from "@/icons";

const industries = [
    { name: "Health & Wellness", icon: "🏥" },
    { name: "Food & Beverage", icon: "🍽️" },
    { name: "Fashion & Apparel", icon: "👗" },
    { name: "Real Estate", icon: "🏠" },
    { name: "Fitness & Gym", icon: "💪" },
    { name: "Beauty & Salon", icon: "💄" },
    { name: "Education & Trai...", icon: "🎓" },
    { name: "Finance & Banking", icon: "💰" },
];

export default function GenerateContent() {
    const [selectedIndustry, setSelectedIndustry] = useState("");

    return (
        <div className="p-10 font-arial max-w-[1200px]">
            <div className="mb-10">
                <h1 className="text-[32px] font-bold text-gray-900 mb-2">Generate Content</h1>
                <p className="text-gray-400 font-medium">Create a full year of AI-powered social media content</p>
            </div>

            <div className="bg-white rounded-[40px] p-10 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)] space-y-12">
                {/* Industry Selection */}
                <section>
                    <h2 className="text-sm font-bold text-gray-700 mb-6 ml-1">Select Your Industry</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {industries.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => setSelectedIndustry(item.name)}
                                className={`p-5 rounded-2xl border transition-all text-left flex items-center justify-between group ${selectedIndustry === item.name
                                    ? "border-brand-500 bg-brand-50/10 ring-1 ring-brand-500"
                                    : "border-gray-100 hover:border-gray-200 bg-white"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-xl shrink-0">{item.icon}</span>
                                    <span className="text-xs font-bold text-gray-600 line-clamp-1">{item.name}</span>
                                </div>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-300">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>
                        ))}
                    </div>
                </section>

                {/* Logo Upload */}
                <section>
                    <h2 className="text-sm font-bold text-gray-700 mb-6 ml-1">Upload Your Logo (Optional)</h2>
                    <div className="border-2 border-dashed border-gray-100 rounded-[32px] p-16 flex flex-col items-center justify-center text-center group hover:border-brand-500 transition-colors cursor-pointer bg-white">
                        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-50 transition-all">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-brand-500">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="17 8 12 3 7 8"></polyline>
                                <line x1="12" y1="3" x2="12" y2="15"></line>
                            </svg>
                        </div>
                        <p className="text-sm font-bold text-gray-900 mb-1">Click to upload or drag and drop</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest tracking-widest">PNG, JPG up to 10MB</p>
                    </div>
                </section>

                {/* Describe Business */}
                <section>
                    <h2 className="text-sm font-bold text-gray-700 mb-6 ml-1">Describe Your Business</h2>
                    <textarea
                        className="w-full h-56 bg-white border border-gray-100 rounded-3xl p-8 text-sm text-gray-900 focus:border-brand-500 transition-all outline-none resize-none placeholder:text-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.01)]"
                        placeholder="I'm an architect specializing in modern residential design. Generate 365 Instagram posts, reels, and festival creative...&#10;&#10;I'm a fitness trainer focused on transformation and motivation. Create daily content featuring workout routines, nutritional tips..."
                    />
                </section>

                <button className="w-full h-16 bg-gray-200 text-gray-400 rounded-2xl font-bold text-base flex items-center justify-center gap-2 cursor-not-allowed transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"></path></svg>
                    Generate 365 Days of Content
                </button>
            </div>

            {/* What Happens Next Banner */}
            <div className="mt-10 bg-[#eff6ff] border border-[#dbeafe] rounded-[24px] p-10">
                <h4 className="text-sm font-bold text-blue-900 mb-6">What happens next?</h4>
                <ul className="space-y-4">
                    {[
                        "AI generates 365 unique posts tailored to your industry",
                        "All content is auto-branded with your logo, phone, and website",
                        "Posts are automatically scheduled throughout the year",
                        "You can edit any post individually without affecting others"
                    ].map((text, i) => (
                        <li key={i} className="flex items-center gap-4 text-sm font-bold text-blue-700/80">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-500 shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            {text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

