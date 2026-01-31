"use client";

import React from "react";
import { Facebook, Instagram, LinkedIn, Youtube } from "@/icons";

const connectedAccounts = [
    {
        name: "Instagram",
        username: "@yourbusiness",
        icon: <Instagram className="w-8 h-8 text-pink-500" />,
        lastSynced: "2 mins ago",
        stats: { published: 142, reach: "24.5K", engagement: "8.2%", followers: "1.2K" }
    },
    {
        name: "Facebook",
        username: "Your Business Page",
        icon: <Facebook className="w-8 h-8 text-blue-600" />,
        lastSynced: "5 mins ago",
        stats: { published: 142, reach: "24.5K", engagement: "8.2%", followers: "1.2K" }
    }
];

export default function SocialAccounts() {
    return (
        <div className="p-10 font-arial max-w-[1400px]">
            <div className="mb-10">
                <h1 className="text-[32px] font-bold text-gray-900 mb-2">Social Accounts</h1>
                <p className="text-gray-400 font-medium">Connect your social media accounts to enable auto-posting</p>
            </div>

            {/* Info Banner */}
            <div className="bg-[#eff6ff] border border-[#dbeafe] rounded-[24px] p-8 mb-10 flex gap-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div className="space-y-4">
                    <h3 className="font-bold text-blue-900">Why connect your accounts?</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-sm font-medium text-blue-700">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Auto-publish content directly to your platforms
                        </li>
                        <li className="flex items-center gap-3 text-sm font-medium text-blue-700">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Schedule posts to go live at optimal times
                        </li>
                        <li className="flex items-center gap-3 text-sm font-medium text-blue-700">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Track performance and engagement metrics
                        </li>
                    </ul>
                </div>
            </div>

            {/* Accounts Grid */}
            <div className="space-y-6">
                {connectedAccounts.map((account) => (
                    <div key={account.name} className="bg-white rounded-[32px] border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)] overflow-hidden">
                        <div className="p-8 md:p-10">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center shadow-sm">
                                        {account.icon}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className="text-lg font-bold text-gray-900">{account.name}</h3>
                                            <span className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1.5 border border-green-100">
                                                <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                                                Connected
                                            </span>
                                        </div>
                                        <p className="text-sm font-bold text-gray-400 mb-1">{account.username}</p>
                                        <p className="text-xs text-gray-300 font-medium tracking-tight">Last synced: {account.lastSynced}</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <button className="h-12 px-6 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-100 transition-all">Refresh</button>
                                    <button className="h-12 px-6 border border-red-100 text-red-500 rounded-xl text-xs font-bold hover:bg-red-50 transition-all">Disconnect</button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-50">
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 text-center">Posts Published</p>
                                    <p className="text-xl font-bold text-gray-900 text-center">{account.stats.published}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 text-center">Total Reach</p>
                                    <p className="text-xl font-bold text-gray-900 text-center">{account.stats.reach}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 text-center">Engagement</p>
                                    <p className="text-xl font-bold text-gray-900 text-center">{account.stats.engagement}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 text-center">New Followers</p>
                                    <p className="text-xl font-bold text-gray-900 text-center">{account.stats.followers}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

