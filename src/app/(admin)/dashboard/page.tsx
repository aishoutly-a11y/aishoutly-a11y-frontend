import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Dashboard | Shoutly AI",
    description: "Overview of your social media performance and AI content generation.",
};

export default function Dashboard() {
    return (
        <div className="p-6 font-outfit">
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Dashboard
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Welcome back! Here&apos;s what&apos;s happening with your brand.
                    </p>
                </div>
                <button className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition duration-200 hover:bg-brand-700">
                    + New Post
                </button>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Posts</p>
                            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">1,248</h4>
                        </div>
                    </div>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Impressions</p>
                            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">84.2K</h4>
                        </div>
                    </div>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Engagement</p>
                            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">5.8%</h4>
                        </div>
                    </div>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Scheduled</p>
                            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">12</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* Upcoming Posts Section */}
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div className="border-b border-gray-100 px-6 py-4 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Upcoming Posts</h3>
                </div>
                <div className="p-6">
                    <div className="flex flex-col gap-4">
                        {[1, 2, 3].map((post, i) => (
                            <div key={i} className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-4 dark:bg-gray-900 dark:border-gray-700">
                                <div className="flex items-center gap-4">
                                    <div className="h-16 w-16 rounded-lg bg-gray-200 object-cover dark:bg-gray-800"></div>
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">New Product Launch Teaser</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Scheduled for Today, 2:00 PM</p>
                                    </div>
                                </div>
                                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                    Instagram
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
