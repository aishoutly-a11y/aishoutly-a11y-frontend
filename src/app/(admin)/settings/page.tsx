"use client";

import React from "react";
import { Facebook, Instagram, LinkedIn, Youtube } from "@/icons";

export default function Settings() {
    return (
        <div className="p-10 font-arial max-w-[1200px] mx-auto pb-20">
            <div className="mb-10">
                <h1 className="text-[32px] font-bold text-gray-900 mb-2">Account Settings</h1>
                <p className="text-gray-400 font-medium">Manage your profile and connected social accounts</p>
            </div>

            <div className="space-y-8">
                {/* Profile Information */}
                <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-8 text-gray-900">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        <h2 className="text-lg font-bold">Profile Information</h2>
                    </div>

                    <div className="flex items-center gap-8 mb-10 pb-10 border-b border-gray-50">
                        <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl">JD</div>
                        <div>
                            <button className="px-6 py-2 border border-gray-100 rounded-xl text-[13px] font-bold text-gray-600 hover:bg-gray-50 transition-all mb-2">Change Photo</button>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none">JPG, PNG or GIF. Max 5MB</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <label className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                Full Name
                            </label>
                            <input type="text" defaultValue="John Doe" className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-5 text-sm font-bold text-gray-900 outline-none focus:bg-white focus:border-brand-500 transition-all" />
                        </div>
                        <div>
                            <label className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                Email Address
                            </label>
                            <input type="email" defaultValue="john@example.com" className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-5 text-sm font-bold text-gray-900 outline-none focus:bg-white focus:border-brand-500 transition-all" />
                        </div>
                    </div>
                    <button className="px-10 py-4 bg-black text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-all shadow-lg">Save Changes</button>
                </div>

                {/* Password & Security */}
                <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-8 text-gray-900">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        <h2 className="text-lg font-bold">Password & Security</h2>
                    </div>

                    <div className="space-y-8 mb-10">
                        <div>
                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Current Password</label>
                            <input type="password" placeholder="••••••••" className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-5 text-sm font-bold text-gray-900 outline-none" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">New Password</label>
                                <input type="password" placeholder="••••••••" className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-5 text-sm font-bold text-gray-900 outline-none" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Confirm Password</label>
                                <input type="password" placeholder="••••••••" className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-5 text-sm font-bold text-gray-900 outline-none" />
                            </div>
                        </div>
                    </div>
                    <button className="px-10 py-4 bg-black text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-all shadow-lg">Update Password</button>
                </div>

                {/* Connected Social Accounts */}
                <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-8 text-gray-900">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        <h2 className="text-lg font-bold">Connected Social Accounts</h2>
                    </div>

                    <div className="divide-y divide-gray-50">
                        {[
                            { name: "Instagram", user: "@yourcompany", icon: <Instagram className="w-5 h-5 text-pink-500" />, connected: true },
                            { name: "Facebook", user: "Your Company", icon: <Facebook className="w-5 h-5 text-blue-600" />, connected: true },
                            { name: "LinkedIn", user: "Your Company", icon: <LinkedIn className="w-5 h-5 text-blue-700" />, connected: true },
                            { name: "YouTube", user: "Your Company", icon: <Youtube className="w-5 h-5 text-red-600" />, connected: true },
                            { name: "X (Twitter)", user: "Not connected", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="black"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>, connected: false },
                        ].map((plat) => (
                            <div key={plat.name} className="py-6 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">{plat.icon}</div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">{plat.name}</p>
                                        <p className="text-xs text-gray-400 font-medium">{plat.user}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    {plat.connected ? (
                                        <>
                                            <span className="text-[10px] font-bold text-green-500 flex items-center gap-1.5"><div className="w-1 h-1 bg-green-500 rounded-full"></div>Connected</span>
                                            <button className="px-6 py-2 border border-red-50 rounded-xl text-[11px] font-bold text-red-400 hover:bg-red-50 transition-all">Disconnect</button>
                                        </>
                                    ) : (
                                        <button className="px-8 py-2 bg-brand-600 text-white rounded-xl text-[11px] font-bold shadow-lg shadow-brand-500/20 hover:bg-brand-700 transition-all">Connect</button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 bg-blue-50/50 border border-blue-100/50 rounded-2xl p-4 text-center">
                        <p className="text-[11px] text-blue-700 font-medium">Connect all your social accounts to enable cross-platform posting and scheduling</p>
                    </div>
                </div>

                {/* Notification Preferences */}
                <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-8 text-gray-900">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        <h2 className="text-lg font-bold">Notification Preferences</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { name: "Email Notifications", desc: "Receive updates via email", active: true },
                            { name: "Push Notifications", desc: "Get notified in your browser", active: false },
                            { name: "Weekly Summary", desc: "Get weekly performance reports", active: false },
                        ].map((notif) => (
                            <div key={notif.name} className="p-6 bg-gray-50/50 rounded-2xl flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-bold text-gray-900">{notif.name}</p>
                                    <p className="text-xs text-gray-400 font-medium">{notif.desc}</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" defaultChecked={notif.active} className="sr-only peer" />
                                    <div className="w-12 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-[19px] after:w-[19px] after:transition-all peer-checked:bg-blue-600 shadow-sm"></div>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Danger Zone */}
                <div className="bg-red-50/30 border border-red-100 rounded-[32px] p-8">
                    <h3 className="text-red-600 font-bold mb-6">Danger Zone</h3>
                    <div className="bg-red-50/50 border border-red-100 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <p className="text-sm font-bold text-gray-900 mb-1">Delete Account</p>
                            <p className="text-xs text-gray-400 font-medium">Permanently delete your account and all data</p>
                        </div>
                        <button className="px-8 py-3 bg-red-600 text-white rounded-xl text-xs font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-500/10">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
