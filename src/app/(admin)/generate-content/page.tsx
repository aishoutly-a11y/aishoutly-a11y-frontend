"use client";

import React, { useState } from "react";
import type { Metadata } from "next";

export default function GenerateContent() {
    const [contentType, setContentType] = useState("post");
    const [generated, setGenerated] = useState(false);

    const handleGenerate = () => {
        setGenerated(true);
    };

    return (
        <div className="p-6 font-outfit">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Generate Content</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Describe what you want to post about, and let AI handle the rest.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col">
                    {/* Content Type Selection */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                            Content Type
                        </label>
                        <div className="flex gap-3">
                            {["post", "reel", "story"].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setContentType(type)}
                                    className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition ${contentType === type
                                        ? "bg-brand-600 text-white shadow-lg shadow-brand-600/20"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-700"
                                        }`}
                                >
                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        What&apos;s this {contentType} about?
                    </label>
                    <textarea
                        className="w-full h-40 rounded-xl border-gray-200 bg-gray-50 p-4 text-sm focus:border-brand-500 focus:ring-brand-500 dark:bg-gray-900 dark:border-gray-700 dark:text-white resize-none"
                        placeholder="e.g. A promotional post for our new summer coffee collection, focusing on cold brew..."
                    ></textarea>

                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Tone of Voice
                            </label>
                            <select className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-2.5 text-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white">
                                <option>Professional & Clean</option>
                                <option>Fun & Energetic</option>
                                <option>Minimalist</option>
                                <option>Inspirational</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Platform
                            </label>
                            <select className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-2.5 text-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white">
                                <option>Instagram</option>
                                <option>LinkedIn</option>
                                <option>Twitter / X</option>
                            </select>
                        </div>
                    </div>

                    <button
                        onClick={handleGenerate}
                        className="mt-6 w-full rounded-xl bg-brand-600 py-4 font-bold text-white shadow-lg hover:bg-brand-700 transition"
                    >
                        Generate Magic ✨
                    </button>
                </div>

                {/* Preview Section */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Preview</h3>

                    {!generated ? (
                        <div className="h-full min-h-[400px] bg-gray-50 dark:bg-gray-900 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center">
                            <div className="text-center text-gray-500 dark:text-gray-400">
                                <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                <p className="font-medium">Your generated content will appear here</p>
                                <p className="text-sm mt-2">Fill in the details and click &quot;Generate Magic&quot;</p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {/* Generated Post Card */}
                            <div className="bg-gradient-to-br from-brand-50 to-purple-50 dark:from-brand-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-brand-200 dark:border-brand-800">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold">S</div>
                                    <div>
                                        <p className="font-bold text-gray-900 dark:text-white">Shoutly AI</p>
                                        <p className="text-xs text-gray-500">Just now</p>
                                    </div>
                                </div>

                                <div className="mb-4 h-48 bg-gradient-to-br from-brand-400 to-purple-500 rounded-lg"></div>

                                <p className="text-gray-900 dark:text-white mb-3">
                                    ☕ Introducing our NEW Summer Cold Brew Collection!
                                    <br /><br />
                                    Beat the heat with our refreshing cold brew varieties - from classic to vanilla bean. Perfect for those sunny days! ☀️
                                    <br /><br />
                                    #ColdBrew #SummerVibes #CoffeeLovers
                                </p>

                                <div className="flex items-center gap-6 text-gray-500 text-sm">
                                    <button className="flex items-center gap-2 hover:text-red-500">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                        <span>Like</span>
                                    </button>
                                    <button className="flex items-center gap-2 hover:text-blue-500">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                        <span>Comment</span>
                                    </button>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button className="flex-1 py-2.5 px-4 rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 transition">
                                    Regenerate
                                </button>
                                <button className="flex-1 py-2.5 px-4 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-700 transition shadow-lg shadow-brand-600/20">
                                    Schedule Post
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
