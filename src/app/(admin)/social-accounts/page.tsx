"use client";

import React from "react";

const platforms = [
    {
        name: "Instagram",
        icon: <div className="w-12 h-12 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-pink-500/20">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
        </div>,
        status: "Connected",
        username: "@shoutly.ai",
        connected: true
    },
    {
        name: "LinkedIn",
        icon: <div className="w-12 h-12 bg-[#0a66c2] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
        </div>,
        status: "Connect Now",
        username: "Company Page",
        connected: false
    },
    {
        name: "TikTok",
        icon: <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-white shadow-lg shadow-black/10">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 2.54 3.35 2.22 1.2-.19 2.14-1.2 2.36-2.38.03-.46.03-.92.03-1.38-.01-4.24-.01-8.48-.01-12.72z" /></svg>
        </div>,
        status: "Connect Now",
        username: "Profile",
        connected: false
    },
    {
        name: "YouTube",
        icon: <div className="w-12 h-12 bg-[#ff0000] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-500/20">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 0 0-2.122 2.136C0 12.01 0 12.01 0 12.01s0 5.823.501 7.824a3.017 3.017 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136c.501-2.001.501-7.824.501-7.824s0-5.823-.501-7.824zM9.545 15.568V1.443l6.531 3.563-6.531 3.562z" /></svg>
        </div>,
        status: "Connect Now",
        username: "Channel",
        connected: false
    }
];

export default function SocialAccounts() {
    return (
        <div className="p-10 font-outfit max-w-[1200px]">
            <div className="mb-12">
                <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-2">Social Accounts</h1>
                <p className="text-gray-500 dark:text-gray-400 font-medium text-lg">Connect your profiles to enable auto-posting and track analytics.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {platforms.map((app) => (
                    <div
                        key={app.name}
                        className="bg-white dark:bg-gray-800 rounded-[40px] p-8 border border-gray-100 dark:border-gray-700 shadow-sm transition-all hover:border-brand-500 hover:shadow-2xl hover:shadow-brand-500/5 flex flex-col justify-between h-[320px]"
                    >
                        <div className="flex justify-between items-start">
                            {app.icon}
                            <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${app.connected
                                    ? "bg-green-50 text-green-600 border border-green-100"
                                    : "bg-gray-50 text-gray-400 border border-gray-100"
                                }`}>
                                {app.connected ? "Active" : "Inactive"}
                            </span>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-1">{app.name}</h3>
                            <p className="text-gray-500 dark:text-gray-400 font-bold">{app.username}</p>
                        </div>

                        <button className={`w-full py-4 rounded-2xl text-sm font-black transition-all ${app.connected
                                ? "bg-gray-50 text-red-500 hover:bg-red-50 hover:text-red-600 border border-gray-100"
                                : "bg-black text-white hover:bg-gray-800 shadow-lg shadow-black/10"
                            }`}>
                            {app.connected ? "Disconnect Account" : "Connect Now"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
