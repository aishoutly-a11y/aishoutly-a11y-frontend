"use client";
import React from "react";
import LineChartOne from "@/components/charts/line/LineChartOne";
import { CalenderIcon, GridIcon, TimeIcon, CheckCircleIcon, ShootingStarIcon, PieChartIcon, Instagram, Facebook, LinkedIn, Twitter } from "@/icons";

const Dashboard: React.FC = () => {
    return (
        <div className="p-10 font-arial max-w-[1600px] mx-auto min-h-screen">
            {/* Header Section */}
            <div className="mb-10 flex justify-between items-center">
                <div>
                    <h1 className="text-[32px] font-bold text-gray-900 mb-2">Welcome back! 👋</h1>
                    <p className="text-gray-400 font-medium">Here&apos;s what&apos;s happening with your content</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center border-2 border-white shadow-sm"><Instagram className="w-4 h-4 text-pink-500" /></div>
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center border-2 border-white shadow-sm"><Facebook className="w-4 h-4 text-blue-600" /></div>
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center border-2 border-white shadow-sm"><LinkedIn className="w-4 h-4 text-blue-700" /></div>
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border-2 border-white shadow-sm"><Twitter className="w-4 h-4 text-black" /></div>
                    </div>
                </div>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                    { label: "Posts Generated", value: "365", icon: <GridIcon className="w-5 h-5 text-blue-500" />, bgColor: "bg-blue-50/50" },
                    { label: "Scheduled This Month", value: "31", icon: <CalenderIcon className="w-5 h-5 text-purple-500" />, bgColor: "bg-purple-50/50" },
                    { label: "Platforms Connected", value: "4", icon: <CheckCircleIcon className="w-5 h-5 text-green-500" />, bgColor: "bg-green-50/50" },
                    { label: "Next Post Time", value: "2h 15m", icon: <TimeIcon className="w-5 h-5 text-orange-500" />, bgColor: "bg-orange-50/50" },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm transition-all hover:shadow-lg hover:shadow-gray-200/50">
                        <div className={`w-12 h-12 ${stat.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                            {stat.icon}
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Automation Status Banner */}
            <div className="bg-[#5D5FEF] p-8 rounded-[32px] flex flex-col md:flex-row items-center justify-between text-white shadow-xl shadow-purple-500/20 mb-10 relative overflow-hidden group">
                <div className="flex items-center gap-6 relative z-10">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-inner">
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-1 flex items-center gap-2">Automation Status: ON</h3>
                        <p className="text-white/80 text-sm font-medium">All content is being auto-generated and scheduled</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/20 mt-6 md:mt-0 relative z-10 transition-all group-hover:bg-white/20">
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]"></div>
                    <span className="text-sm font-bold tracking-tight">System Active</span>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left Column */}
                <div className="lg:col-span-8 space-y-10">
                    {/* Quick Actions */}
                    <section>
                        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 ml-1">Quick Actions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "View Calendar", desc: "See your content schedule", icon: <CalenderIcon className="w-5 h-5 text-blue-500" />, bgColor: "bg-blue-50/50" },
                                { title: "Generate New Content", desc: "Create more posts", icon: <ShootingStarIcon className="w-5 h-5 text-purple-500" />, bgColor: "bg-purple-50/50" },
                                { title: "Connect Social Accounts", desc: "Add more platforms", icon: <CheckCircleIcon className="w-5 h-5 text-green-500" />, bgColor: "bg-green-50/50" },
                            ].map((action, i) => (
                                <button key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm text-left hover:border-brand-500 transition-all hover:shadow-2xl hover:shadow-brand-500/5 group">
                                    <div className={`w-12 h-12 ${action.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        {action.icon}
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-base mb-1">{action.title}</h4>
                                    <p className="text-xs text-gray-400 font-medium">{action.desc}</p>
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Performance Overview */}
                    <section>
                        <div className="flex items-center justify-between mb-6 px-1">
                            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Performance Overview</h2>
                            <div className="bg-gray-100 px-4 py-2 rounded-xl text-[10px] font-bold text-gray-400 uppercase tracking-widest">Last 30 Days</div>
                        </div>
                        <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 pb-10 border-b border-gray-50">
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Engagement Rate</p>
                                    <div className="flex items-end gap-2">
                                        <span className="text-3xl font-bold text-gray-900">+24.5%</span>
                                        <span className="text-[10px] text-green-500 font-bold mb-1">↑ 12%</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Total Reach</p>
                                    <div className="flex items-end gap-2">
                                        <span className="text-3xl font-bold text-gray-900">45.2K</span>
                                        <span className="text-[10px] text-green-500 font-bold mb-1">↑ 8%</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Posts Published</p>
                                    <div className="flex items-end gap-2">
                                        <span className="text-3xl font-bold text-gray-900">21</span>
                                        <span className="text-[10px] text-gray-400 font-bold mb-1">On schedule</span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[320px] relative z-10">
                                <LineChartOne />
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-4 space-y-10">
                    {/* Recent Activity */}
                    <section>
                        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 ml-1">Recent Activity</h2>
                        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-8">
                            {[
                                { title: "Content generated for January 2025", time: "2 mins ago", color: "bg-green-500" },
                                { title: "Posted to Instagram", time: "1 hour ago", color: "bg-blue-500" },
                                { title: "Edited caption for Dec 15 post", time: "3 hours ago", color: "bg-orange-500" },
                                { title: "Connected LinkedIn account", time: "1 day ago", color: "bg-blue-700" }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5 items-start">
                                    <div className={`mt-1.5 w-2 h-2 rounded-full ${item.color} shrink-0 shadow-sm`}></div>
                                    <div>
                                        <p className="text-[13px] font-bold text-gray-900 leading-tight mb-1">{item.title}</p>
                                        <p className="text-[11px] text-gray-400 font-medium">{item.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Upcoming Posts */}
                    <section>
                        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 ml-1">Upcoming Posts</h2>
                        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6">
                            {[
                                { title: "Holiday Special", time: "Tomorrow, 10:00 AM", color: "bg-pink-100" },
                                { title: "Product Launch", time: "Tomorrow, 02:00 PM", color: "bg-blue-100" },
                                { title: "Winter Sale", time: "Dec 15, 09:00 AM", color: "bg-purple-100" }
                            ].map((post, i) => (
                                <div key={i} className="flex items-center gap-5 p-2 -m-2 rounded-2xl hover:bg-gray-50 transition-all cursor-pointer">
                                    <div className={`w-14 h-14 ${post.color} rounded-2xl shrink-0 flex items-center justify-center text-xl`}>📸</div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 mb-1">{post.title}</h4>
                                        <p className="text-[11px] text-gray-400 font-bold">{post.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

